// b3d8abdc05c90d578b5efa802314719d
// http://openweathermap.org/img/wn/
// 702550 - Lviv
// 712165 - Bila Tserkva







function weather(cityId) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=b3d8abdc05c90d578b5efa802314719d&units=metric&lang=ua`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            console.log(Math.round(data.main.temp));
            document.querySelector('.city-name .name').innerHTML = data.name;


            let localTime = new Date().getTime()//поточна дата
            let localOffset = new Date().getTimezoneOffset() * 60000 //зміщення
            let utc = localTime + localOffset //поточна
            let cityTime = utc + (1000 * data.timezone)

            let newDate = new Date(cityTime)

            document.querySelector('.city-name .time').innerHTML = newDate.toLocaleString();

            document.querySelector('.tempurature').innerHTML = Math.round(data.main.temp) + '&#8451;';
            document.querySelector('.tempurature-feel').innerHTML = Math.round(data.main.feels_like) + '&#8451;';
            document.querySelector('.hidro').innerHTML = data.main.humidity + '%';
            document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + ' м/с';

            document.querySelector('.description .text').innerHTML = data.weather[0]['description'];
            document.querySelector('.wheather-ico').src = 'http://openweathermap.org/img/wn/' + data.weather[0]['icon'] + '@2x.png';






        })
        .catch(function () {
        })
}



let select = document.querySelector('#city');
let img = document.querySelector('.img');
img.style.backgroundImage = `url(ccc.jpg) `

weather(select.value);
select.addEventListener('change', () => {
    weather(select.value);
    if (select.value == '712165') {//Bila Tserkva
        img.style.backgroundImage = `url(ccc.jpg) `
    }
    else if (select.value == '703448') {//Kyiv
        img.style.backgroundImage = `url(ky5.jpg)`
    }
    else if (select.value == '702550') {//Lviv
        img.style.backgroundImage = `url(lv2.jpg)`
    }
    else if (select.value == '709930') {//Dnipro
        img.style.backgroundImage = `url(dn.jpg)`
    }
    else if (select.value == '706483') {//Harkiv
        img.style.backgroundImage = `url(har.jpg)`
    }
    else if (select.value == '691650') {//Ternopil
        img.style.backgroundImage = `url(ter2.jpg)`
    }
    else if (select.value == '698740') {//Odesa
        img.style.backgroundImage = `url(od2.jpg)`
    }
    else if (select.value == '687700') {//Zaporiza
        img.style.backgroundImage = `url(zap2.jpg)`
    }
    else if (select.value == '689558') {//Vinnica
        img.style.backgroundImage = `url(vin4.jpg)`
    }
    else if (select.value == '707471') {//Ivano Frankivsk
        img.style.backgroundImage = `url(if.jpg)`
    }
    else if (select.value == '706369') {//Hmelnickiy
        img.style.backgroundImage = `url(hm2.jpg)`
    }
    else if (select.value == '702569') {//Lyck
        img.style.backgroundImage = `url(ly2.jpg)`
    }
    else if (select.value == '696643') {//Poltava
        img.style.backgroundImage = `url(pol.jpg)`
    }
    else if (select.value == '695365') {//Rivne
        img.style.backgroundImage = `url(riv.jpeg)`
    }
    else if (select.value == '710791') {//Cherkasy
        img.style.backgroundImage = `url(cherk2.jpeg)`
    }
    else if (select.value == '700568') {//Mykolaiv
        img.style.backgroundImage = `url(myc.jpg)`
    }
    else if (select.value == '686967') {//Jytomir
        img.style.backgroundImage = `url(jit.jpg)`
    }
    else if (select.value == '705812') {//Kropivnitsky
        img.style.backgroundImage = `url(krop.jpg)`
    }
    else if (select.value == '710735') {//Chernigiv
        img.style.backgroundImage = `url(chern.jpg)`
    }
    else if (select.value == '692194') {//Sumy
        img.style.backgroundImage = `url(sy.jpg)`
    }
    else if (select.value == '690548') {//Yshgorod
        img.style.backgroundImage = `url(yj2.jpg)`
    }
    else if (select.value == '706448') {//Herson
        img.style.backgroundImage = `url(her2.jpg)`
    }


    else if (select.value == '5128581') {//New York
        img.style.backgroundImage = `url(new.jpeg)`
    }
    else if (select.value == '2643743') {//London
        img.style.backgroundImage = `url(lon2.jpg)`
    }
    else if (select.value == '3169070') {//Rim
        img.style.backgroundImage = `url(rim3.jpg)`
    }
    else if (select.value == '3128760') {//Barselona
        img.style.backgroundImage = `url(bar3.jpg)`
    }
    else if (select.value == '1850147') {//Tokio
        img.style.backgroundImage = `url(tok.jpg)`
    } else if (select.value == '709717') {//Donetsk
        img.style.backgroundImage = `url(don2.jpg)`
    }
    else if (select.value == '702658') {//Lyhanck
        img.style.backgroundImage = `url(lyg.jpg)`
    }
    else if (select.value == '693805') {//Simferopol
        img.style.backgroundImage = `url(sim.jpg)`
    }
    else if (select.value == '2968815') {//Paris
        img.style.backgroundImage = `url(par2.jpg)`
    }
    
    
})















// function назва-функції(параметр) {
//     fetch(`http://api.openweathermap.org/data/2.5/weather?id=${параметр}&appid=власний-ід&units=metric&lang=ua`)
//         .then(function (resp) { return resp.json() })
//         .then(function (data) {
//             console.log(data);

//         })
//         .catch(function () {
//         })
// }