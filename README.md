This is a build of a Dungeons & Dragons encounter builder inspired by the DND [Beyond Encounter Builder](https://www.dndbeyond.com/encounter-builder).

[dnd-encounter-builder-ed78.vercel.app](dnd-encounter-builder-ed78.vercel.app)

# Technologies

The frontend of this app was built using

- [NextJS 13](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Daisy UI](https://daisyui.com/)

The backend of this app was built using

- [Supabase](https://supabase.com/)
- [Postgres](https://supabase.com/docs/guides/database/overview)
- [Open5e API](https://open5e.com/)

# Database

## Table: encounters

<b>id</b>: (uuid), id of the encounter <br>
<b>created_at</b>: (timestamptz), Time the row was created at <br>
<b>monsters</b>: (json[]), List of monsters and their count `{slug: string, count: number}[]` <br>
<b>name</b>: (varchar), Name of the encounter <br>

## Dataflow Architecture

When the encounters are queried from the database they are <i>hydrated</i> using the open5e monster API. This way we only store the slug of the monster in the database but then are able to use the entire monster data in the app. This cuts down on duplicating data from the open5e API into our own database.
