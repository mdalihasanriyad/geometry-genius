function calculateTraingleArea(){
    
    const traingleBaseInput = document.getElementById('traingle-base');
    const traingleBaseText = traingleBaseInput.value;
    const base = parseFloat(traingleBaseText);
    console.log(base)

    const traingleheightInput = document.getElementById('height');
    const traingleheightText = traingleheightInput.value;
    const height = parseFloat(traingleheightText);
    console.log(height)

    // calculate traingle area
    const area = 0.5 * base * height;
    console.log('area of the traingle is', area);

    // display tringle area 
    const traingleAreaSpan = document.getElementById('traingle-area');
    traingleAreaSpan.innerText =area;
}