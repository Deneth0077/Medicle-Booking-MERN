
import { formateDate } from '../../utils/formateDate'

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                About Of 
                <span className='text-irisBlueColor font-bold text-[24px] leading-9'  >
                    wirakrama pathirana 
                </span>
            </h3>
            <p className='text__para'>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil 
             fuga quae aperiam neque quasi eaque nulla, dolore nemo maiores praesentium
              quisquam quam ipsum commodi eius accusamus non nobis incidunt rerum.
            </p>
        </div>

        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'> 
            Education
            </h3> 
            
            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {formateDate ("01-11-2016")} -  {formateDate ("07-04-2010")}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            PHD in Surgeon
                        </p>
                    </div>
                    <p className='text-[14px] leading-6 font-medium text-textColor'>
                        New Apollo Hospital New York.
                    </p>
                </li>

                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {formateDate ("07-04-2010")} -  {formateDate ("07-04-2010")}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            PHD in Surgeon
                        </p>
                    </div>
                    <p className='text-[14px] leading-6 font-medium text-textColor'>
                        New Apollo Hospital New York.
                    </p>
                </li>

            </ul>
        </div>

        <div className='mt-12'>
        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'> 
             Experience
            </h3> 
            
            <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellowColor text-[16px] leading-6 font-semibold' > 
                    {formateDate ("01-11-2016")} -  {formateDate ("07-04-2010")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                            sr. Mahanama
                        </p>
                        <p className='text-[14px] leading-6 font-medium text-textColor'>
                        New Apollo Hospital New York.
                    </p>
                </li>

                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellowColor text-[16px] leading-6 font-semibold' > 
                    {formateDate ("01-11-2016")} -  {formateDate ("07-04-2010")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                            sr. Mahanama
                        </p>
                        <p className='text-[14px] leading-6 font-medium text-textColor'>
                        New Apollo Hospital New York.
                    </p>
                </li>

            </ul>

        </div>

        </div>
    </div>
  )
}

export default DoctorAbout