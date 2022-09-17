interface GameBannerProps {
    bannerUrl: string,
    title: string,
    adsCount: number,
}

export function GameBanner(props: GameBannerProps) {
    return (
        <a href="" className='relative rounded-lg overflow-hidden'>
            <img src={props.bannerUrl} alt="" className="md:h-[130px]" />

            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 md:pt-2 md:px-1'>
                <strong className='font-bold text-white block  md:text-[12px] xl:text-base'>{props.title}</strong>
                <span className='text-zinc-300 text-sm block'>{props.adsCount} anúncio(s)</span>
            </div>
        </a>
    )
}