

export const worldBlockAnim = (duration : number,dir : number, onComplete? : ()=>void) : anime.AnimeAnimParams => (
{
        targets : ".world--comment",
        translateX: [
            {value : (dir * 10) + "%", duration : duration / 2},
            {value : (dir * 200) + "%", duration : duration / 2}
        ],
        translateY: [
            {value : (-20) + "%", duration : duration / 2},
        ],
        scale : [
            {value : 1.2, duration : duration / 2},
            {value : 1.5, duration : duration / 2}
        ],
        opacity : [
            {value : 1, duration : duration / 2},
            {value : 0, duration : duration / 2}
        ],
        
        easing: 'easeInOutSine',
        autoplay : false,
        complete : onComplete
    }
)
export const worldBlockAnimBack = (duration : number,dir : number, onComplete? : ()=>void) : anime.AnimeAnimParams => (
    {
            targets : ".world--comment",
            translateX: [
                {value : (dir * 200) + "%", duration : 0},
                {value : (dir * 10) + "%", duration : duration / 2},
                {value : (0) + "%", duration :  duration / 2}
            ],
            translateY: [
                {value : (-20) + "%", duration : 0},
                {value : (0) + "%", duration : duration / 2},
            ],
            scale : [
                {value : 1.5, duration :0},
                {value : 1.2, duration : duration / 2},
                {value : 1, duration : duration / 2},
            ],
            opacity : [
                {value : 0, duration :0},
                {value : 1, duration : duration / 2}
            ],
            easing: 'easeInOutSine',
            autoplay : false,
            complete : onComplete
        }
    )