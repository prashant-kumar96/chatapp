import Image from 'next/image';
import Link from 'next/link';

const Content = () => {
    const data = [{
        name: "Sundram",
        icon: "https://media.licdn.com/dms/image/v2/D5603AQFDc5Bk-3X-0w/profile-displayphoto-crop_800_800/B56Zhq55eqHkAI-/0/1754140220037?e=1772064000&v=beta&t=BQ5M32CqYMXEQf0_fR7hwk5DIl3A_Pj156w-MeXyCaM",
        src: "/chat"
    },
    {
        name: "Manar",
        icon: "https://media.licdn.com/dms/image/v2/D5635AQH2ZP1zNZQwhA/profile-framedphoto-shrink_800_800/B56Ztz4gm5LAAg-/0/1767175752376?e=1770807600&v=beta&t=V1nMdMKP4uL1EnvWOPkLdzqnJXE1VQcURGugvAAB6PI",
        src: "/chat"
    },
    ]

    return (
        <li>
            {data?.map(d =>
                <Link href={d.src} className="items-center p-2 rounded cursor:pointer " key={d.name}>
                    <div className="flex my-2 hover:bg-red-100 hover:text-gray-900" >
                        <Image src={d.icon} width="40" height="30" alt="profile pic" className="rounded-full" />
                        <button type="button" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none ">{d?.name}</button>
                    </div>
                </Link>
            )
            }
        </li>
    )
}

export default Content