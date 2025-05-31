import Image from 'next/image';

export default function TeamCard({ member }: { member: { name: string; role: string; bio: string; image: string } }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition">
      <div className="relative h-48 w-full">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
        <p className="text-blue-600 text-sm font-medium mb-2">{member.role}</p>
        <p className="text-gray-600">{member.bio}</p>
      </div>
    </div>
  );
}