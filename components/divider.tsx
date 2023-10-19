import Image from 'next/image';

export default function Divider() {
  return (
    <div className="flex align-middle justify-center items-center">
      <div className="h-px bg-white flex-grow"></div>
      <Image src={'/logo_white.png'} height={56} width={56} alt={'divider'} className="inline-block mx-8" />
      <div className="h-px bg-white flex-grow"></div>
    </div>
  );
}
