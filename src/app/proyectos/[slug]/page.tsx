import Martins from "@/components/projects/Martins";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  switch (slug) {
    case "martins":
      return <Martins />;

    default:
      return (
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold">Proyecto no encontrado</h1>
        </div>
      );
  }
}
