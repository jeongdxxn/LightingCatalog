import Image from 'next/image'
import sa_lighting_logo from '../../public/images/sa_lighting_logo.png'

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between p-6">
      <Image src={sa_lighting_logo} alt="logo" width={250} height={50} />
      <nav>
        <ul className="flex space-x-4 cursor-pointer">
          <li>전체</li>
          <li>식탁/펜던트</li>
          <li>방등</li>
          <li>거실등</li>
          <li>벽등</li>
          <li>주방</li>
          <li>직부/센서</li>
        </ul>
      </nav>
    </header>
  )
}