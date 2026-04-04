import Image from "next/image";
import { PortableText } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { LEADERSHIP_QUERY, TEAM_MEMBERS_QUERY } from "@/sanity/lib/queries";

type Member = {
  _id: string;
  name: string;
  role?: string;
  image?: { asset: { _ref: string } };
  bio?: Array<{ _type: string; [key: string]: unknown }>;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

function MemberCard({ member }: { member: Member }) {
  const hasBio = member.bio && member.bio.length > 0;

  return (
    <div className="group border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all duration-300">
      {/* Header with photo + name + role */}
      <div className="flex items-center gap-5 px-6 py-5 bg-accent/5 border-b border-accent/20">
        {member.image ? (
          <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 ring-2 ring-accent/20">
            <Image
              src={urlFor(member.image).width(128).height(128).url()}
              alt={member.name}
              fill
              className="object-cover object-top"
            />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center shrink-0 ring-2 ring-accent/20">
            <span className="text-accent text-xl font-bold">
              {getInitials(member.name)}
            </span>
          </div>
        )}
        <div>
          <h2 className="text-lg font-bold text-black">{member.name}</h2>
          {member.role && (
            <p className="text-xs text-accent font-medium mt-0.5">
              {member.role}
            </p>
          )}
        </div>
      </div>

      {/* Bio */}
      {hasBio && (
        <div className="px-6 py-5 space-y-2.5 text-sm text-muted leading-relaxed">
          <PortableText value={member.bio!} />
        </div>
      )}
    </div>
  );
}

function SimpleCard({ member }: { member: Member }) {
  return (
    <div className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-border bg-white hover:shadow-md hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300">
      {member.image ? (
        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 group-hover:ring-2 ring-accent/20 transition-all duration-300">
          <Image
            src={urlFor(member.image).width(80).height(80).url()}
            alt={member.name}
            fill
            className="object-cover object-top"
          />
        </div>
      ) : (
        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
          <span className="text-accent text-sm font-bold group-hover:text-white transition-colors duration-300">
            {getInitials(member.name)}
          </span>
        </div>
      )}
      <div>
        <span className="text-sm text-black font-medium">{member.name}</span>
        {member.role && (
          <p className="text-xs text-muted">{member.role}</p>
        )}
      </div>
    </div>
  );
}

export default async function PeoplePage() {
  const [leadership, teamMembers] = await Promise.all([
    client.fetch<Member[]>(LEADERSHIP_QUERY),
    client.fetch<Member[]>(TEAM_MEMBERS_QUERY),
  ]);

  // Team members with a bio get the full card treatment
  const richTeamMembers = teamMembers.filter(
    (m) => m.bio && m.bio.length > 0
  );
  const simpleTeamMembers = teamMembers.filter(
    (m) => !m.bio || m.bio.length === 0
  );

  return (
    <main className="w-full bg-white">
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-[1400px] mx-auto px-0 md:px-10 lg:px-18">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
              The People
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
            Meet Our Team
          </h1>
          <div className="mt-4 h-[2px] w-12 bg-accent" />
          <p className="mt-4 text-muted">
            The minds behind disciplined investing
          </p>

          {/* Leadership Cards */}
          {leadership.length > 0 && (
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {leadership.map((member) => (
                <MemberCard key={member._id} member={member} />
              ))}
            </div>
          )}

          {/* Team Members with bios — full cards */}
          {richTeamMembers.length > 0 && (
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {richTeamMembers.map((member) => (
                <MemberCard key={member._id} member={member} />
              ))}
            </div>
          )}

          {/* Team Members without bios — compact cards */}
          {simpleTeamMembers.length > 0 && (
            <div className="mt-14">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-accent" />
                <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
                  Our People
                </span>
              </div>
              <h2 className="text-2xl text-black mb-6">Team Members</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {simpleTeamMembers.map((member) => (
                  <SimpleCard key={member._id} member={member} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
