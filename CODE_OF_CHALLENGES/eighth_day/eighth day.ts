function organizeGifts(gifts: string) {
    const matches = gifts.match(/(\d*\w)/g)

    if (!matches) return gifts

    for (let match of matches) {
        let count = Number(match.slice(0, -1))
        let gift  = match.at(-1)!
        let draft = ''

        const palets = Math.floor(count / 50)
        count -= palets * 50 
        const boxes = Math.floor(count / 10)
        count -= boxes * 10
        
        if (palets) draft += `[${gift}]`.repeat(palets)
        if (boxes) draft += `{${gift}}`.repeat(boxes)
        if (count) draft += `(${gift.repeat(count)})`

        gifts = gifts.replace(match, draft)
    }

    return gifts
}
