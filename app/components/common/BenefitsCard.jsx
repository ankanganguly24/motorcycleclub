import { Card, CardContent } from "./Card"; // Import from global components

export default function BenefitCard({ icon, title, description }) {
  return (
    <Card className="w-full">
      <CardContent>
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
}
