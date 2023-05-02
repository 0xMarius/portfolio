<script>
    import SvelteMarkdown from 'svelte-markdown'
    import { AnimatedHeadline } from "svelte-animated-headline"
    import { fade, blur, fly, slide, scale } from 'svelte/transition';
    import { quintOut } from "svelte/easing";
    import 'iconify-icon';

    const source = `
    MMMMMMMMMMMMMMMMMMWNWMMMMMMMMMMMMMM
    MMMMMMMMMMMMW0kl;,'',:ldONMMMMMMMMM
    MMMMMMMMMNxc'......'...',;xNMMMMMMM
    MMMMMMMWk,..........''''''';OWMMMMM
    MMMMMMMo...............''''';0WMMMM
    MMMMMMN'.......':;,,',',,,'',dWWMWW
    MMMMMMWl.....';:oxddodxdll:',dWWMWW
    MMMMMMMN;...:ldk00000000OOko;NWWWWW
    MMMMMMMMK,.;xxxdldxkOOxd:ddkOWWWWWW
    MMMMMMMMWxccxkkxxOkxxkxkkkkONWWWWWW
    MMMMMMMMMKxdxkO000OdxOkkO00OWWWWWWW
    MMMMMMMMMW0kdxOO00OxxkxkOOO0WWWWWWW
    MMMMMMMMMMMWxxkOOOkxdddxkkONWWWWWWW
    MMMMMMMMMMWWkxxkkkkxxxxxkkXWWWWWWWW
    MMMMMMMMMMWWOkxxxxkkkkkkk0WWWWWWWWW
    MMMMMMMMMMWWkO0OkkkkxxkkO0WWWWWWWWW
    MMMMMMMMWN0kkO0000000OOOO0NWWWWWWWW
    MMMMMWWNNXOkk00KKKKK0000OOONNNNNWWW
    MMWWNNNNNNWK0000KKK0000OOOONNXXXXXN
    WWNNNNNNNNNWNXXKKKKKK00O0KXNNXXXXNN
    MWWWNNNNNNNNNWWWNNNNXXXXNNNNNNNNNNN
    MWWWWWWNNNNNWWWNWWWWNNNNNNNNNNNNNNN
    MWWWWWWNWNNNNWWWWWWNNNNNNNNNNNNNNNN`
    import Printer from './printer.svelte'
    import Paper from './paper.svelte'
    import Blinker from './blinker.svelte'
</script>

<div class="bg-stone-200 grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
    <div class="xs:flex xs:justify-center md:flex-none">
        <h1 class="fixed text-center sm:static lg:text-right pt-28 lg:pt-52 font-mono font-semibold text-6xl">
            <AnimatedHeadline texts={['Hello, I am ', 'Mijn naam is ', 'Sveiki, aš ', '哈喽，我是 ']}/>
             Marius.<Blinker class="flex"/>
        </h1>
        <p transition:fly="{{ x: 200, duration: 2000 }}" class="pt-8 lg:pl-[3.7rem] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <mark>Ut optime, secundum naturam affectum esse possit.</mark> <a href="http://loripsum.net/" target="_blank">Hanc quoque iucunditatem, si vis, transfer in animum;</a> <i>Quod equidem non reprehendo;</i> <a href="http://loripsum.net/" target="_blank">Duo Reges: constructio interrete.</a> Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Inde sermone vario sex illa a Dipylo stadia confecimus. Cum autem in quo sapienter dicimus, id a primo rectissime dicitur. </p>
        <img class="pt-8 lg:pl-8 drop-shadow-[0rem_9.3rem_0px_rgba(0,0,0,0.5)]" src="../../plane.gif"/>
    </div>
    <div class="flex items-center justify-center">
        <span class="inline-flex pt-64 sm:pt-14 w-4/5">
            <Printer />
            <iconify-icon class="mt-58 text-4xl absolute" icon="ic:twotone-print"></iconify-icon>
        </span>
        <svg id="paper" class="sm:mt-[40.2rem] h-1/2 w-[13.2rem] sm:w-[24.1rem] inline-flex bg-[#f5f5f4] absolute">
            <rect />
        </svg> 
        <span class="inline-flex mt-[4rem] writer absolute">
            <div class="rotate-90">
                <div class="sm:mt-[35rem] writer-text drop-shadow-[5px_5px_5px_rgba(0,0,0,1)] relative z-0">
                    <SvelteMarkdown {source}/>
                </div>
            </div>
        </span>
    </div>

</div>
<div class="bg-stone-200 grid grid-cols1 lg:grid-cols-2">
    <div class="bg-[#d6d3d1]">
        <h1 class="pt-8 pb-12 text-center font-sans uppercase font-bold text-5xl">3D modeling</h1>
        <p class="pb-8 lg:pl-[3.7rem] text-justify pb-8 font-serif">As someone who has used Blender for creating 3D models, I recommend it as a versatile and powerful tool. It offers a wide range of features and tools, along with an intuitive interface that makes it easy to get started. What I appreciate most about Blender is that it provides a lot of freedom for experimentation and customization via its node system, which allowed me to discover my own style and approach to 3D modeling. So, if you're interested in exploring the world of 3D modeling, I highly suggest giving Blender a try. It's a fantastic tool that can help you unlock your creativity and unleash your imagination.</p>
    </div>
    <div class="bg-[#d6d3d1]"></div>
    <div class="bg-[#a8a29e]">
        <img src="../../ghost.gif" alt="ghost"/>
    </div>
    <div class="py-8 bg-[#a8a29e]">
        <h2 class="py-8 text-center font-sans font-bold text-5xl">A (very!) scary ghost</h2>
        <p class="lg:pr-[3.7rem] text-justify font-serif">I came across an artist's tweet on Twitter featuring a lovely painting of a charming little ghost. It was so captivating that I felt inspired to recreate it in 3D. Using my 3D modeling skills, I created a cute and whimsical ghost, and to make it stand out, I added a glowing effect. The tricky part was getting the lighting juuuust right. It was a fun and fulfilling project that showcased the power of artistic inspiration.</p>
    </div>
    <div class="bg-[#a8a29e]">
        <img src="../../ghost-shade.png" alt="ghost shaded"/>
    </div>
    <div class="bg-[#a8a29e]">
        <img src="../../ghost-wire.png" alt="ghost wired"/>
    </div>
    <div class="py-8 bg-[#78716c]">
        <h2 class="py-8 text-center font-sans font-bold text-5xl">Various materials</h2>
        <p class="lg:pl-[3.7rem] text-justify font-serif">In my quest to learn how to create different materials using Blender's node system, I decided to take on a challenging project: a 3D model of a cable that showcased the different layers of insulation. I worked my way from the outermost layer of rubber to the innermost layer of some kind of gel, experimenting with different node combinations and textures to create each layer's unique appearance. The result was a visually stunning 3D model that showcased the power of Blender's node system and my newfound knowledge of creating realistic materials.</p>
    </div>
    <div class="bg-[#78716c]">
        <img src="../../cable.png" alt="cable"/>
    </div>
    <div></div>
</div>
<div class="bg-stone-200 grid grid-cols-1">
    <div  class="py-12 bg-[#d6d3d1]">
        <h1 class="text-center font-sans uppercase font-bold text-5xl">Acrylic paintings</h1>
        <p class="lg:pl-[7.4rem] lg:pr-[7.4rem] text-center font-serif">What I love most about acrylic paint is how fast it dries, which means that you can work quickly and build up layers to create texture and depth. I also appreciate how easy it is to mix and blend colors to achieve exactly the hue and shade you want. Acrylic paint an be used on so many surfaces, from canvas to wood to paper, which makes it a great choice for a variety of projects. Plus, the clean-up is a breeze, which means more time for painting and less time worrying about the mess.</p>
    </div>
</div>
<div class="bg-stone-200 grid grid-cols1 lg:grid-cols-2">
    <div class="flex justify-center bg-[#a8a29e]">
        <img class="w-[32rem]" src="../../mengmeng.png" alt="a gift"/>
    </div>
    <div class="py-8 bg-[#a8a29e]">
        <h2 class="py-8 font-sans font-bold text-5xl">A gift to 萌萌</h2>
        <p class="lg:pr-[3.7rem] text-justify font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <mark>Ut optime, secundum naturam affectum esse possit.</mark> <a href="http://loripsum.net/" target="_blank">Hanc quoque iucunditatem, si vis, transfer in animum;</a> <i>Quod equidem non reprehendo;</i> <a href="http://loripsum.net/" target="_blank">Duo Reges: constructio interrete.</a> Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Inde sermone vario sex illa a Dipylo stadia confecimus. Cum autem in quo sapienter dicimus, id a primo rectissime dicitur. </p>
    </div>
    <div class="py-8 bg-[#78716c]">
        <h2 class="py-8 text-center font-sans font-bold text-5xl">The emblem of class 1B</h2>
        <p class="lg:pl-[3.7rem] text-justify font-serif"></p>
    </div>
    <div class="bg-[#78716c]">
        <img class="drop-shadow-[5rem_5rem_0px_rgba(0,0,0,1)]" src="../../tiger.png" alt="tiger">
    </div>
</div>


<style>
    .printing {
        background:red;
    }
    .writer {
        /* font-family: Courier, monospace; */
        display: inline-block;
    }
    .writer-text {
        overflow: hidden;
        letter-spacing: 1px;
        animation: typing 2s steps(60, end) forwards;
        white-space: nowrap;
        font-size: 9px;
        font-weight: 1000;
        /* border-right: 4px solid #121212; */
        /* box-sizing: border-box; */
    }
    @keyframes typing {
        from { 
            width: 0% 
        }
        to { 
            width: 100% 
        }
    }
</style>