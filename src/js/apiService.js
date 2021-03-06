/*
 *     Використовуєм окремий об'єкт для збереження логіки 
 *     apiService.js  -  об'єкт виконує логіку
 */

//const apiKey = '20347157-bf35dc9934e298cd0bab289fc';
                
export default {
    searchQuery: '',
    page: 1,
    perPage: 12,
    //  apiKey: '20347157-bf35dc9934e298cd0bab289fc',
              
     
                        //async /* REST-пагінація */!!! отримати на цю адресу запит    
async fetchArticles() {     
      const apiKey = '20347157-bf35dc9934e298cd0bab289fc';
    const url = `https://pixabay.com/api/?key=${apiKey}&image_type=photo&orientation=horizontal&q=${this.searchQuery}&per_page=${this.perPage}&page=${this.page}`; /* як варіант звернення до GET-ера  */
       
    // const options = {
    //     headers: { Authorization: apiKey,},
    // };

    // return fetch(url, options)
        return fetch(url)    
            .then(res => res.json())    //повернення res.json()
             .catch(console.log)
            .then(({ hits }) => {
                //this.page += 1; /* виносим в incrementPage() */
                this.incrementPage(); /*  incrementPage() */

                return hits;
            })       // !!! Це відповідь на наш запит  
             .catch(error => console.log(error));        
    },
    resetPage() {
        this.page = 1;
    },    
    incrementPage() {  /* створюєм incrementPage() */
        this.page += 1;
    },
    get query() {         /*  на всяк випадок стоять */
            console.log('get this.searchQuery:', this.searchQuery);
        return this.searchQuery;
    },
    set query(value) {            
        this.searchQuery = value;
    },

};
