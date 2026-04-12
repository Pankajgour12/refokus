import Stripe from './stripe'


const data = [
  { id: 1, url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", number: 12 },
  { id: 2, url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", number: 2 },
  { id: 3, url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", number: 53 },
  { id: 4, url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", number: 74 },
  { id: 5, url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", number: 25 },
  { id: 6, url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", number: 69 }
]

const Stripes = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-20'>
      
      {data.map((elem, index) => (
        <Stripe
          key={elem.id}
          val={elem}
          isFirst={index === 0}
          isLast={index === data.length - 1}
        />
      ))}

    </div>
  )
}

export default Stripes