import Link from "next/link";

export default function Navbar () {
    return (
        <div className='h-84 bg-navbar sticky top-0'>
            <div className=' px-6 h-84 flex justify-between items-center max-w-container m-container'>
                <p className='text-2xl font-semibold text-title'>
                    <Link href='/'>TokoLaku</Link>
                </p>
                <div className='flex'>
                    <div className='flex mr-3 rounded-lg justify-center items-center h-36 w-75 bg-white hover:bg-hovProfile '>Profile</div>
                    <div className='flex rounded-lg justify-center items-center h-36 w-75 bg-buttRed text-white hover:bg-hovRed'>Logout</div>
                </div>
            </div>
        </div>
    )
}