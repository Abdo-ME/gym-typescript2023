import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
import useMediaQuery from '@/hooks/useMediaQuery'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    setSelectedPage: (value:SelectedPage)=>  void

}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)')

  return (
    <section id='home'
    className='gap-16 bg-gray-20 py-20 md:h-full md:pb-0'
    >
      {/* Image and main header */}
      <div className=' md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 '>
        {/* Main header */}
        <div className='z-10 mt-32 md:basis-3/5'>
          {/* Headings */}
          <div className='md:-mt-20'>
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'> 
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>
          {/* Actions */}
          <div className='mt-8 flex gap-8 items-center'>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className='align-middle text-sm font-bold to-primary-500 underline hover: text-secondary-400'
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
        {/* Image */}
        <div className='flex basis-3/5 justify-center md:z-10
        md:ml-40 md:mt-16 md:justify-end' >
          <img src={HomePageGraphic} alt="home-pageGraphic" />
        </div>
      </div>
      {/* Sponsors */}
      {isAboveMediumScreens && (
        <div className=' w-full mt-5 bg-primary-100 h-[150px] py-10'>
          <div className='mx-auto w-5/6'>
            <div className='flex w-3/5 items-center justify-between gap-8'>
              <img src={SponsorRedBull} alt="sponsor" />
              <img src={SponsorForbes} alt="sponsor" />
              <img src={SponsorFortune} alt="sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home