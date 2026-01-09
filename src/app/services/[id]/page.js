import { triServices } from "@/data/data";
import { notFound } from "next/navigation";
import Service from "@/components/Service";

export default async function ServicePage({ params }) {
  const { id } = await params; // ✅ match your working pattern

  const service = triServices.find((s) => s.id === id);
  if (!service) return notFound();

  return (
    <div className="container py-4">
      <h1 style={{ marginBottom: 16 }}>{service.serviceName}</h1>

      <Service
        serviceName={service.serviceName}
        prevImg={service.prevImg}
        image={service.image}
        blog={service.blog}
      />
    </div>
  );
}
