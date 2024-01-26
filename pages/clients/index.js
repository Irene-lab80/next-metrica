import Head from "next/head";
import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    {id: "max", name: "Max"},
    {id: "alex", name: "Alex"},
  ];

  return (
    <>
      <Head>
        <title>Next js course</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={``}>
        <h1>Clients Page</h1>
        <ul>
          {clients.map((client) => (
            <li>
              <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
