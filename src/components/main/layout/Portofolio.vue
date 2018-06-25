<template>
    <section id="portfolio" class="container-fluid">
                <div class="row section--padding-top">
                    <div class="col-lg-6 offset-lg-2 col-md-12 col-sm-12">
                        <h5 class="section__pre-title">CHECK IT OUT</h5>
                        <h1 class="section__title">Portfolio</h1>
                        
                    </div>
                </div>
                    <div class="row">
                        <div class="col-lg-6 offset-lg-2 col-md-6 offset-md-2 col-sm-12">
                            <ul class="portofolio__ul">
                                <li class="portofolio__li"
                                    v-for="(item, index) in categories"
                                    :key="item.name"
                                    :class="{ 'portofolio__li--active' : categories[index].isActive }"
                                    :data-rel="categories[index].rel"
                                    @click="checkCat(index), setMenu(item, index)">
                                    {{item.name}}
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <p class="portofolio__li" @click="toggleSort = !toggleSort">Filter</p>
                        </div>
                        <template v-if="toggleSort">
                            <div class="col-lg-3 offset-lg-2 col-md-12 portfolio-sort">
                                <ul class="portfolio-sort__ul">
                                    <p class="portfolio-sort__p">Sort By</p>
                                    <li class="portfolio-sort__li"
                                        v-for="(sort, index) in sortBy"
                                        :key="sort.name"
                                        :class="{ 'portfolio-sort__li--active' : sortBy[index].isActive }"
                                        :data-rel="sortBy[index].rel"
                                        @click=" checkSort(index), setSort(sort, index)">
                                        {{sort.name}}
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-3 portfolio-tags">
                                <ul class="portfolio-tags__ul">
                                    <p class="portfolio-sort__p">Tags</p>
                                    <li class="portfolio-tags__li"
                                        v-for="(tag, index) in tags"
                                        :key="tag.name"
                                        :class="{ 'portfolio-tags__li--active' : tags[index].isActive }"
                                        @click=" checkTags(tag, index), setTags(tag, index)">
                                        {{tag.name}}
                                    </li>
                                </ul>
                            </div>
                        </template> 
                    </div>
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <transition-group name="portofolio__list-items" tag="ul" class="portofolio__items row">
                        
                            <li class="portofolio__list-items col-lg-3 col-md-6 col-sm-12"
                                :class="[item.isActive ? 'portofolio__img--active' : 'portofolio__img--inactive']"
                                :key="item.name"
                                v-for="item in finalData"
                                @click="showModal(item), sendItemModal(item)">
                                <img :src="item.srcMain" :alt="item.name" :class="item.class">    
                            </li>
                            </transition-group>
                            <div class="separator--vertical"></div>
                            <div v-if="loadMoreActive" class="text--center">
                                <a class="btn btn--lg btn--lined" @click="loadMore()">Load more work</a>
                            </div>
                        </div>
                    </div>
                    <portfolio-projects-modal v-show="isProjectsModalVisible" @closeTheProjectsModal="closeProjectsModal">
                        <div class="col-lg-6 col-sm-6 modal-header__title" slot="header"><h3 class="modal-header__h3">{{ itemModal.name }}</h3></div>
                        
                        <img slot="body" :src="itemModal.srcMain" :alt="itemModal.name" class="portofolio__item--modal">
                        <img slot="body2" :src="itemModal.srcOptional1" :alt="itemModal.name" class="portofolio__item--modal">
                        <img slot="body3" :src="itemModal.srcOptional2" :alt="itemModal.name" class="portofolio__item--modal">
                        
                        <p slot="about">{{ itemModal.description }}</p>
                    </portfolio-projects-modal>

                    <portfolio-modal v-show="isModalVisible" @closeTheModal="closeModal">
                        <div class="col-lg-10 offset-lg-1 col-sm-10 offset-sm-1 col-10 offset-1 modal-header__title" slot="header"><h3 class="modal-header__h3">{{ itemModal.name }}</h3></div>    
                        <img slot="body" :src="itemModal.srcMain" :alt="itemModal.name" class="portofolio__item--modal-full">
                    </portfolio-modal>
    </section>
</template>

<script>
import PortfolioProjectsModal from './../../aside/PortfolioProjectsModal.vue'
import PortfolioModal from './../../aside/PortfolioModal.vue'

export default {
    components: {
        'portfolio-projects-modal': PortfolioProjectsModal,
        'portfolio-modal': PortfolioModal
    },
    data() {
        return {
            itemModal: [],
            isModalVisible: false,
            isProjectsModalVisible: false,
            loadMoreActive: false,
            offset: 4, // display items after load more
            display: 8, // ititial items to display on page
            itemsLength: '',
            sortByActive: '',
            filterByTags: [],
            toggleSort: false,
            selectedRel: 'all',
            tags: [
                {name: 'web', isActive: false},
                {name: 'design', isActive: false},
                {name: 'simple', isActive: false},
                {name: 'responsive', isActive: false}
            ],
            sortBy: [
                {name: 'Name: Ascending', isActive: false}, 
                {name: 'Name: Descending', isActive: false}
            ],
            categories: [
                {name: "All", isActive: true, rel: "all"},
                {name: "Projects", isActive: false, rel: "projects"},
                {name: "Video", isActive: false, rel: "video"},
                {name: "Photo", isActive: false, rel: "photo"}
            ],
            items: [
                {srcMain: require("../../../assets/header6.jpg"), srcOptional1: require("../../../assets/logo.png"), srcOptional2: require("../../../assets/header4.jpg"), name: "Website design", description: "This is a description text, more text is expected here. Just write something interesting, or not.", categories: ["projects", "all"], isActive: true, tags: ["web", "design"]},
                {srcMain: require("../../../assets/header5.jpg"), name: "Video creation", description: "This is a description text, more text is expected here. Just write something interesting, or not.", categories: ["video", "all"], isActive: true, tags: ["design"]},
                {srcMain: require("../../../assets/header4.jpg"), name: "Design website", description: "This is a description text, more text is expected here. Just write something interesting, or not.", categories: ["video", "all"], isActive: true, tags: ["simple"]},
                {srcMain: require("../../../assets/header6.jpg"), name: "Artistic photo here", description: "This is a description text, more text is expected here. Just write something interesting, or not.", categories: ["photo", "all"], isActive: true, tags: ["responsive"]},
                {srcMain: require("../../../assets/header3.jpg"), srcOptional1: require("../../../assets/logo.png"), name: "h Item 5", description: "This is a description text, more text is expected here. Just write something interesting, or not.", categories: ["projects", "all"], isActive: true, tags: ["responsive", "web"]},
                {srcMain: require("../../../assets/header6.jpg"), name: "e Item 6", description: "This is a description text, more text is expected here. Just write something interesting, or not.", categories: ["video", "all"], isActive: true, tags: ["design"]},
                {srcMain: require("../../../assets/header5.jpg"), name: "m Item 7 photo here", description: "This is a description text, more text is expected here. Just write something interesting, or not.", categories: ["photo", "all"], isActive: true, tags: ["simple"]},
                {srcMain: require("../../../assets/logo.png"), name: "f Item 8 photo here", description: "This is a description text, more text is expected here. Just write something interesting, or not.", categories: ["photo", "all"], isActive: true, tags: ["simple"]},
                {srcMain: require("../../../assets/logo.png"), name: "l Item 9", description: "This is a description text, more text is expected here. Just write something interesting, or not.", categories: ["video", "all"],  isActive: true, tags: ["design"]},
                {srcMain: require("../../../assets/header5.jpg"), srcOptional1: require("../../../assets/logo.png"), name: "a Item 10", description: "This is a description text, more text is expected here. Just write something interesting, or not.", categories: ["projects", "all"], isActive: true, tags: ["responsive", "design"]},
                {srcMain: require("../../../assets/logo.png"), name: "k Item 11 photo here", description: "This is a description text, more text is expected here. Just write something interesting, or not.", categories: ["photo", "all"], isActive: true, tags: ["web"]},
                {srcMain: require("../../../assets/logo.png"), name: "j Item 12", description: "This is a description text, more text is expected here. Just write something interesting, or not.", categories: ["video", "all"],  isActive: true, tags: ["responsive"]}
            ]
        }
    },
    computed: {
        finalData() {
            return this.paginateRows(this.sortData, this.display);
        },
        sortData() {
            return this.sortRows(this.filterDataTags, this.sortByActive);
        },
        filterDataTags() {
            return this.filterTags(this.filterData);
        },
        filterData() {
            return this.filterRows(this.items, this.selectedRel);
        }
    },
    methods: {
        setMenu(item, index) { 
            Object.keys(this.categories).forEach(val => {
                if(this.categories[val].isActive === false && this.categories[val].rel === item.rel) {    
                    this.categories[val].isActive = true;
                } else if (this.categories[val].isActive === true && this.categories[val].rel === item.rel) {
                    this.categories[val].isActive = true;
                } else {
                    this.categories[val].isActive = false;
                }     
            });
        },
        checkCat(index) {
            this.selectedRel = this.categories[index].rel;
            this.itemsLength = this.items.length;
        },
        paginateRows(sorted, page) {
            var count = '';
            sorted.forEach(element => {     
                if(element.isActive === true) {
                    count++;
                }
            });
            count > this.display ? this.loadMoreActive = true : this.loadMoreActive = false;
            if(count > page) {
                return sorted.slice(0, page);
            } else {
                return sorted;
            }       
        },
        sortRows(filter, sort) {
            if (sort === "Name: Ascending") {
                return filter.sort((a,b) => a.name.localeCompare(b.name));
            } if (sort === "Name: Descending"){
                return filter.sort((a,b) => b.name.localeCompare(a.name));
            } else {
                return filter;
            }   
        },
        filterRows(items, selectedRel) {
            items.forEach(element => {
                var count = 0;
                element.categories.map(function(val) {
                    if (val === selectedRel) {
                        count ++;
                    } 
                count > 0 ? element.isActive = true : element.isActive = false;
                });           
            }); 
            
            return items.filter(function(e){
                return e;
            });
        },
        filterTags(items) {
            
            items.forEach(element => {
                var count = 0;
                console.log("is active? : " + element.isActive);
                if (element.isActive) {
                    var intersections = element.tags.filter(e => this.filterByTags.indexOf(e) !== -1);
                        console.log("found something? : " + intersections.length);
                    intersections > 0 ? count ++ : count;
                        console.log(count);
                    count > 0 ? element.isActive = true : element.isActive = false;
                    console.log(element.isActive);
                } 

            });
            
            return items.filter(function(e){
                return e;
            });
        },
        loadMore() {
            this.display += this.offset;
        },
        showModal(img) {   //check if img clicked is a project
        var counter = 0;
            img.categories.forEach(e => {
                if(e === "projects") {
                    counter++;
                    console.log(counter);
                }  
            });
            counter > 0 ? this.isProjectsModalVisible = true : this.isModalVisible = true;
            console.log("Project: " + this.isProjectsModalVisible);
            console.log("Normal: " + this.isModalVisible);
        },
        closeModal() { //close modal
            this.isModalVisible = false;
            console.log(this.isModalVisible);
        },
        closeProjectsModal() { //close modal
            this.isProjectsModalVisible = false;
            console.log(this.isProjectsModalVisible);
        },
        sendItemModal(img) {
            this.itemModal = img;
        },
        checkSort(index) {
            this.sortByActive = this.sortBy[index].name;
        },
        setSort(item, index) { 
            Object.keys(this.sortBy).forEach(val => {
                if(this.sortBy[val].isActive === false && this.sortBy[val].name === this.sortByActive) {    
                    this.sortBy[val].isActive = true;
                } else if (this.sortBy[val].isActive === true && this.sortBy[val].name === this.sortByActive) {
                    this.sortBy[val].isActive = true;
                } else {
                    this.sortBy[val].isActive = false;
                }     
            });
        },
        checkTags(tag, index) {  
           
            if (this.filterByTags.length === 0) { 
                this.filterByTags.push(this.tags[index].name);
            } else {
                var counter = 0;
                this.filterByTags.forEach(item => {       
                    tag.name === item ? counter++ : counter; 
                }); 
                if(counter > 0) {
                    this.filterByTags.splice(this.filterByTags.indexOf(tag.name), 1); 
                } 
                else {
                    this.filterByTags.push(this.tags[index].name);
                }
            }
        },
        setTags(tag, index) {
            if(this.tags[index].isActive === false) {
                this.tags[index].isActive = true;
            } else if (this.tags[index].isActive === true) {
                this.tags[index].isActive = false;
            } 
        }    
    }
}
</script>
<style>
.text--center {
    text-align: center;
}
.btn--lg {
    padding: 18px 30px;
}
.btn--lined {
    background: none;
    color:#b5b5b7 !important;
    line-height: 1.6;
    font-size: 16px;
    font-weight: 700;
    border: 2px solid #b5b5b7;
    border-radius: 0;
    transition: all .1s ease-in-out;
}
.btn--right {
    float: right;
}
.separator--vertical {
    width: 1px;
    height: 40px;
    background: #5c646b;
    margin: 20px auto;
}




.section--title {
    font-family: 'Anton', sans-serif;
    font-size: 40px;
    letter-spacing: 8px;
    color: #b5b5b7;
    max-width: 100%;
    overflow: hidden;
}
.section--padding {
    padding-top: 100px;
}
.portofolio__items {
    padding: 0;
}
.portofolio__ul {
    padding: 0;
}
.portofolio__li {
    font-size: 1.125rem;
    list-style-type: none;
    display: inline-block;
    padding: 10px;
    margin: 0;
    color: #b5b5b7;
}
.portofolio__li--active {
    color: #f2b632;
}
.portofolio__li:hover {
    cursor: pointer;
    color: #f2b632;
    
}
.portofolio__list-items {
    
    height: 400px;
    list-style-type: none;
    padding: 15px;
}
.portofolio__list-items p {
    position: absolute;

}
.portofolio__list-items-move {
    transition: all 600ms ease-in-out;
}
.portofolio__list-items-enter-active {
    transition: all 400ms ease-out;
}
.portofolio__list-items-leave-active {
    transition: all 200ms ease-in;
    
}
.portofolio__list-items-enter,
.portofolio__list-items-leave-to {
    opacity: 0;
    z-index: -100;
}

.portofolio__list-items-enter {
    transform: scale(0.9);
}
.portofolio__list-items:hover {
    cursor: pointer;
}

.portofolio__img--active {
    opacity: 1;
    display: block;
    position: relative;
}
.portofolio__img--active img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
}
.portofolio__img--inactive {
    position: absolute;
    bottom: 0;
    opacity: 0;
    z-index: -999;

}
/* sort */
.portfolio-sort, .portfolio-tags {
    margin-top: 20px;
    margin-bottom: 20px;
}
.portfolio-sort__p, .portfolio-tags__p {
    list-style-type: none;
    font-size: 1rem;
    color: #d1d1d1;
}
.portfolio-sort__ul, .portfolio-tags__ul {
    padding: 0;
}
.portfolio-sort__li, .portfolio-tags__li {
    font-size: 0.875rem;
    list-style-type: none;
    display: block;
    padding: 5px;
    color: #b5b5b7;
    cursor: pointer;
}
.portfolio-sort__li--active, .portfolio-tags__li--active {
    color: #f2b632;
    
}
.portfolio-sort__li--active p:before, .portfolio-tags__li--active p:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    background: #9cf5a6;
    visibility: hidden;
    border-radius: 5px;
    transform: scaleX(0);
    transition: 0.25s linear;
}
.portfolio-sort__li--active p:hover:before,
.portfolio-sort__li--active p:focus:before,
.portfolio-tags__li--active p:hover:before,
.portfolio-tags__li--active p:focus:before  {
    visibility: visible;
    transform: scaleX(1);
    
}
/*.portfolio-sort__li:hover {
    cursor: pointer;
    color: #f2b632;
    border-bottom: 1px solid #f2b632;
}*/
.portofolio__item--modal {
    width: 100%;
    height: 30vh;
    object-fit: cover;
}
.portofolio__item--modal-full {
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
</style>