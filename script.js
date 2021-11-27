let url="https://api.openbrewerydb.org/breweries";
    const fetchdata=async()=>{
        try{
            const response=await fetch(url)
            const display=await response.json();
            display.forEach(element=>{
                const div=document.createElement('div');
                let website='';
                if(element.website_url!==null){
                    website=element.website_url
                }
                div.innerHTML=`name:${element.name}<br>
                type:${element.brewery_type}<br>
                state:${element.state}<br>
                country:${element.street}<br>
                website:${element.website_url}<br><br>`;
                document.body.appendChild(div);
            })
        }
        catch(err){
            console.log(err);
        }
    }
    console.log(fetchdata());
   


