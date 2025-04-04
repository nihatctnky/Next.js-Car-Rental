
import Card from '../components/card';
import Hero from '../components/hero/index';
import { getCars } from '../utils/service';




const Page = async () => {
    const { cars } = await getCars()




    return <div className=' p-5 md:p-7 lg:px-10'>
        <Hero />

        <h1 className='text-zinc-500 font-semibold mt-10 mb-5'>Popüler Araçlar</h1>


        <div className='grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {cars.map((car) => (
                <Card car={car} key={car._id} />
            ))}
        </div>

    </div>
}
export default Page