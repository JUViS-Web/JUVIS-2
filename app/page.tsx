import { supabase } from '@/lib/supabase';

export default async function Home() {
  const { data, error } = await supabase.from('members').select('*').limit(5);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-50">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">JUVIS-OCHOLT</h1>
        <p className="mt-2 text-slate-300">
          Mitglieder- und Dienstverwaltungssystem
        </p>

        <div className="mt-8 rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-lg">
          {error ? (
            <div className="text-red-400">
              <p className="font-medium">Verbindungsfehler</p>
              <p className="mt-2 text-sm">{error.message}</p>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-semibold">Mitglieder</h2>
              {(!data || data.length === 0) ? (
                <p className="mt-4 text-slate-400">Noch keine Mitglieder vorhanden.</p>
              ) : (
                <ul className="mt-4 space-y-3">
                  {data.map((member: any) => (
                    <li key={member.id} className="rounded-lg border border-slate-700 bg-slate-800 p-3">
                      <span className="font-medium">
                        {member.first_name ?? 'Unbekannt'} {member.last_name ?? ''}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
