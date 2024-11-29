import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import shootMain from '../../public/images/shoot/shootmain.gif';
import shoot1st from '../../public/images/shoot/shootFIRST.json';
import shoot2nd from '../../public/images/shoot/shootSECOND.json';
import shoot3rd from '../../public/images/shoot/shootTHIRD.json';
import shoot4th from '../../public/images/shoot/shootFORTH.json';
import shoot5th from '../../public/images/shoot/shootFIFTH.json';
import shoot6th from '../../public/images/shoot/shootSIXTHgif.gif';
import Lottie from 'lottie-react';
import ScrollToTop from '../components/ScrollToTop';

const MainPage = () => {
    const [scrollPosition, setScrollPosition] = useState({
        timeline1: 0,
        timeline2: 0,
        timeline3: 0,
      });
      
      const timelineRef1 = useRef<HTMLDivElement>(null);
      const timelineRef2 = useRef<HTMLDivElement>(null);
      const timelineRef3 = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        const handleScroll = () => {
          const timeline1 = timelineRef1.current;
          const timeline2 = timelineRef2.current;
          const timeline3 = timelineRef3.current;
    
          if (timeline1 && timeline2 && timeline3) {
            const calculateScrollPosition = (timeline: HTMLDivElement) => {
              const timelineTop = timeline.getBoundingClientRect().top + window.scrollY;
              const timelineHeight = timeline.offsetHeight;
              const scrollY = window.scrollY + window.innerHeight / 2;
    
              if (scrollY > timelineTop && scrollY < timelineTop + timelineHeight) {
                return Math.min(100, ((scrollY - timelineTop) / timelineHeight) * 100);
              } else if (scrollY <= timelineTop) {
                return 10;
              } else {
                return 100;
              }
            };
    
            setScrollPosition({
              timeline1: calculateScrollPosition(timeline1),
              timeline2: calculateScrollPosition(timeline2),
              timeline3: calculateScrollPosition(timeline3)
            });
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    


    return (
        <div className="flex flex-col items-center justify-center w-full ">
            <div className="flex flex-col items-center justify-center w-full ">
                <div className="flex flex-col bg-[#080808] w-full">
                    <div className="text-Grayscale-0 mt-[250px] text-[50px] font-bold font-['Pretendard'] leading-[75px] tracking-wide text-center">
                        SHOOT YOUR CREATIVE OUTPUT
                    </div>

                    <p className="flex text-center items-center justify-center mt-[46px] text-white text-[19px] font-['Pretendard']">
                        SHOOT integrates all key points,
                        <br /> emphasizing the flexibility, collaboration, and task management with FIGMA,
                        <br /> while maintaining user-friendly flow.
                    </p>

                    <div className="mt-[70px] flex justify-center">
                        <Link to="signin">
                            <div className="w-[152.72px] h-[61px] p-5 rounded-[10px] border border-primary-30 flex justify-center items-center cursor-pointer">
                                <span className="text-primary-30 text-[19px] font-medium font-['Pretendard'] leading-7 text-center">
                                    SIGN IN
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center mt-[62px]">
                        <img className="w-[1293px] h-[697px]" src={shootMain} alt="SHOOT 메인 로고" />
                    </div>
                </div>
            </div>
            {/** 구역 1 */}
            <div className='flex flex-col items-center justify-center px-[320px]'>
                <div className="mt-[156px] text-center text-white text-[36px] font-bold font-['Pretendard'] leading-[60px] uppercase ">
                    Manage your frame and comment efficiently
                </div>

                {/** 구역1 Row 정렬 */}
                <div className="flex flex-row mt-[181px]">
                    {/** 구역 1 Row Left */}
                    <div className="flex flex-col" >
                        <div className="mt-[155px] text-Grayscale_0 text-[36px] font-bold font-['Pretendard'] uppercase leading-[60px] tracking-tight">
                            Capture key moments
                            <br/>of your design
                            <br/>and create your block
                        </div>

                        <div className="mt-[336px] p-0.5 rounded-[18px] bg-custom-gradient">
                            <Lottie animationData={shoot1st} loop={true}/>
                        </div>
                    </div>
                    
                   {/** 가운데 구분선 */}
                   <div className="flex flex-col items-center justify-between ml-[58px] mr-[58px] relative" >
                        <div className="w-1 bg-[#1D1E1F] h-[1190px]" ref={timelineRef1}/>
                        <div className="absolute w-1 rounded bg-custom-linear-gradient"
                            style={{height: "222px", top: `${scrollPosition.timeline1}%`,transform: "translateY(-50%)",}}
                        />
                        <div className="w-2.5 h-2.5 bg-[#6effd9] rounded-full absolute top-[224px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30" />    
                        <div className="w-2.5 h-2.5 bg-[#6effd9] rounded-full absolute bottom-[316px] left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20" />
                    </div>
                    
                    
                    {/** 구역 1 Row Col 2 */}
                    <div className="flex flex-col items-end">
                        <div className="p-0.5 rounded-[18px] bg-custom-gradient">
                            <Lottie animationData={shoot2nd} loop={true}/>
                        </div>

                        <div className="ml-auto mt-[336px] text-Grayscale_0 text-[36px] font-bold font-['Pretendard'] uppercase leading-[60px] tracking-tight">
                            Leave comments, 
                            <br />spark collaboration
                        </div>
                    </div>
                </div>
            </div>    

            {/** 구역 2 */}
            <div className='mt-[156px] mb-[192px] px-[320px]'>
                <div className="text-center text-white text-[36px] font-bold font-['Pretendard'] leading-[60px] uppercase">
                    Sync with your team, 
                    <br/>stay updated on every comment
                </div>

                {/** Row 정렬 */}
                <div className="flex flex-row mt-[100px] w-full">
                    {/** 왼쪽 세로*/}
                    <div className="mt-[210px] w-[559px] text-Grayscale_0 text-[35.1px] font-bold font-['Pretendard'] uppercase leading-[60px] tracking-tight">
                        Stay connected   
                        <br/>with team messenger
                        <br/>Integrations and receive
                        <br/>real-time notifications
                    </div>
                    
                    {/** 가운데 구분선 */}
                    <div className="flex flex-col items-center justify-between mx-[20px] ml-[79px] mr-[55px] relative">
                        <div className="w-1 bg-[#1D1E1F] h-[640px]" ref={timelineRef2}/>
                        <div className="absolute w-1 rounded bg-custom-linear-gradient"
                            style={{height: "222px", top: `${scrollPosition.timeline2}%`,transform: "translateY(-50%)",}}
                        />
                        <div className="w-2.5 h-2.5 bg-[#6effd9] rounded-full absolute bottom-[316px] left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20" />
                    </div>

                    {/** 오른쪽 세로 */}
                    <div className="p-0.5 rounded-[18px] mt-[89px] h-[388px] bg-custom-gradient">
                        <Lottie animationData={shoot3rd} loop={true}/>
                    </div>
                </div>
            </div>    

            {/** 구역 3 */}
            <div className='mt-[100px] px-[320px]'>
                <div className="text-center text-white text-[36px] font-bold font-['Pretendard'] leading-[60px] uppercase">
                    Manage any requests directly 
                    <br/>through your own TODO List
                </div>

                {/** Row 정렬 */}
                <div className="flex flex-row mt-[100px] relative">
                    {/** 왼쪽 세로*/}
                    <div className='flex flex-col mt-[89px] items-start'>
                        <div className=' p-0.5 rounded-[18px] bg-custom-gradient'>
                             <Lottie animationData={shoot4th} loop={true}/>
                        </div>
                        <div className="mt-[336px] text-Grayscale_0 text-[36px] font-bold font-['Pretendard'] uppercase leading-[60px] tracking-tight">
                            Track your tasks   
                            <br/>efficiently
                            <br/>with 'yet-DOING-done' 
                            <br/>status management
                        </div>
                        <div className="mt-[276px] p-0.5 rounded-[22px] bg-custom-gradient">
                            <img src={shoot6th} className='rounded-[22px]'/>
                        </div>
                    </div>
                   
                    
                    {/** 구분선 - 스크롤 시 높이 변경 */}
                    <div className="flex flex-col items-center justify-between mx-[20px] ml-[58px] mr-[55px] relative">
                        <div className="w-1 bg-[#1D1E1F] h-[1930px]" ref={timelineRef3}/>
                        <div className="absolute w-1 rounded bg-custom-linear-gradient"
                            style={{height: "222px", top: `${scrollPosition.timeline3}%`,transform: "translateY(-50%)",}}
                        />
                        <div className="w-2.5 h-2.5 bg-[#6effd9] rounded-full absolute top-[314px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30" />    
                        <div className="w-2.5 h-2.5 bg-[#6effd9] rounded-full absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30" />    
                        <div className="w-2.5 h-2.5 bg-[#6effd9] rounded-full absolute bottom-[326px] left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20" />
                    </div>

                    {/** 오른쪽 세로 */}
                    <div className='flex flex-col mt-[230px] items-end'>
                        <div className="text-Grayscale_0 text-[36px] font-bold font-['Pretendard'] uppercase leading-[60px] tracking-tight">
                            Turn any request 
                            <br/>into a to-do 
                            <br/>with just one click
                        </div>
                        <div className="mt-[332px] p-0.5 rounded-[18px] bg-custom-gradient">
                            <Lottie animationData={shoot5th} loop={true}/>
                        </div>
                        <div className="mt-[335.64px] text-Grayscale_0 text-[36px] font-bold font-['Pretendard'] uppercase leading-[60px] tracking-tight">
                            View mentioned 
                            <br/>comments in one place
                            <br/>for quick access
                        </div>
                    </div>
                </div>
            </div>    

            {/* 마지막 텍스트 */}
            <div className='mt-[155px] mb-[155px]'>
                <div className=" text-white text-[50px] font-bold font-['Pretendard'] leading-[75px] tracking-wide text-center">
                    SHOOT YOUR CREATIVE OUTPUT
                </div>
                <ScrollToTop />

                <div className='mt-[17px] justify-center items-center gap-2.5 flex'>
                    <Link to="signin">
                        <div className="w-[152.72px] h-[61px] p-5 rounded-[10px] border border-primary-30 flex justify-center items-center cursor-pointer">
                            <span className="text-primary-30 text-[19px] font-medium font-['Pretendard'] leading-7 text-center">
                                SIGN IN
                            </span>
                        </div>
                     </Link>
                </div>
            </div>

        </div>
    );
};

export default MainPage;
