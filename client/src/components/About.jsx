import {AboutImage} from '../utils/Images'
import {Text} from '../components/Text'
const About = () => {
  return (
        <>
            <section className="margin-y-xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="col-span-2 lg:col-span-1 padding">
                    <img  src={AboutImage} alt="About Image"  />
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <div className='h-full flex flex-col justify-between'>
                        <div>
                            <Text className='padding-b margin-b leading-6' variant='h3'><span className='text-primary mr-2'>About</span>Us</Text>
                            <Text className='font-semibold tracking-wide leading-8'>we believe in the power of exceptional events. We are a passionate team of event professionals dedicated to turning your dreams into unforgettable experiences. With a commitment to creativity, precision, and excellence, we take pride in orchestrating events that leave a lasting impression.</Text>
                        </div>
                        <div className="green-bar margin-t"></div>
                        <div>
                            <Text variant='h3' className='text-justify padding-b leading-6'>Our<span className='text-primary ml-2'>Mission</span></Text>
                            <Text className='font-semibold tracking-wide padding-t leading-8'>To transform your vision into reality. We're dedicated to delivering exceptional events that exceed your expectations, leaving you and your guests with memories to cherish for a lifetime.</Text>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About