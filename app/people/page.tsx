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
    .join("")
    .slice(0, 2);
}

/* ─────────── Photo on the left, all text on the right ─────────── */
function MemberCard({ member }: { member: Member }) {
  const hasBio = member.bio && member.bio.length > 0;

  return (
    <article className="group flex flex-row gap-5 md:gap-6 bg-white border border-border rounded-xl p-4 md:p-5 hover:shadow-md hover:border-black/15 hover:-translate-y-0.5 transition-all duration-300">
      {/* Square photo, fixed size, top-aligned */}
      <div className="relative shrink-0 self-start aspect-square w-24 sm:w-28 md:w-32 lg:w-36 bg-surface overflow-hidden rounded-md">
        {member.image ? (
          <Image
            src={urlFor(member.image).width(320).height(320).url()}
            alt={member.name}
            fill
            sizes="144px"
            className="object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-black/25 text-2xl md:text-3xl font-bold tracking-tight">
              {getInitials(member.name)}
            </span>
          </div>
        )}
      </div>

      {/* All text fills the right side, no clipping */}
      <div className="flex-1 min-w-0">
        <h2 className="text-base md:text-lg font-bold text-black leading-snug break-words">
          {member.name}
        </h2>
        {member.role && (
          <p className="mt-0.5 text-xs md:text-sm text-black/55 font-medium break-words">
            {member.role}
          </p>
        )}

        {hasBio && (
          <div className="mt-2.5 space-y-2 text-[13px] md:text-sm text-black/70 leading-relaxed [&_p]:m-0 [&_p+p]:mt-2 break-words">
            <PortableText value={member.bio!} />
          </div>
        )}
      </div>
    </article>
  );
}

export default async function PeoplePage() {
  const [leadership, teamMembers] = await Promise.all([
    client.fetch<Member[]>(LEADERSHIP_QUERY),
    client.fetch<Member[]>(TEAM_MEMBERS_QUERY),
  ]);

  return (
    <main className="w-full bg-white">
      <section className="pt-28 pb-20 px-6">
        <div className="max-w-[1400px] mx-auto px-0 md:px-10 lg:px-18">

          <h1 className="text-3xl sm:text-4xl md:text-5xl text-black leading-tight">
            Meet Our Team
          </h1>
          <div className="mt-4 h-[2px] w-12 bg-accent" />

          {/* Leadership — one member per row, full width */}
          {leadership.length > 0 && (
            <div className="mt-12 flex flex-col gap-5 md:gap-6">
              {leadership.map((member) => (
                <MemberCard key={member._id} member={member} />
              ))}
            </div>
          )}

          {/* All team members — same horizontal card layout, one per row */}
          {teamMembers.length > 0 && (
            <div className="mt-5 md:mt-6 flex flex-col gap-5 md:gap-6">
              {teamMembers.map((member) => (
                <MemberCard key={member._id} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
