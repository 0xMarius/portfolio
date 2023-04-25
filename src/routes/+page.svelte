<script>
    import SvelteMarkdown from 'svelte-markdown'
    import { AnimatedHeadline } from "svelte-animated-headline"

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
</script>

<div class="bg-stone-200 grid grid-cols-2 gap-4 place-content-center">
    <div>
        <div class="pr-12 pt-48 font-mono font-semibold text-5xl text-right">
            <AnimatedHeadline texts={["Hello, I'm ", "Hallo mijn naam is", "Sveiki, aš", "哈喽，我是 "]}/>
            Marius.
            <!-- <p class="animate-ping absolute inline-flex text-[2rem]">|</p> -->
        </div>
        <p class="pt-6 pl-[22rem] font-serif text-3xl text-left">Hello, I'm Marius.</p>
    </div>
    <div>
        <div class="pt-12 pl-12 w-[36rem]">
            <Printer />
        </div>
        <div class="left-[4rem] rotate-90 drop-shadow-[0_5px_0px_rgba(0,0,0,1)] relative z-0">
            <div class="writer">
                <div class="writer-text"><SvelteMarkdown {source}/></div>
            </div>
            <!-- <p class="leading-extra-tight text-sm font-black">
                <SvelteMarkdown {source}/>
            </p> -->
        </div>
    </div>
    <div>
    </div>
    <div>04</div>
</div>

<style>
    .writer {
        font-family: Courier, monospace;
        display: inline-block;
    }
    .writer-text {
        display: inline-block;
        overflow: hidden;
        letter-spacing: 1px;
        animation: typing 5s steps(60, end), blink .75s step-end infinite;
        white-space: nowrap;
        font-size: 9px;
        font-weight: 700;
        /* border-right: 4px solid #121212; */
        box-sizing: border-box;
    }
    @keyframes typing {
        from { 
            width: 0% 
        }
        to { 
            width: 100% 
        }
    }

    /* @keyframes blink {
        from, to { 
            border-color: transparent 
        }
        50% { 
            border-color: #121212; 
        }
    } */
</style>