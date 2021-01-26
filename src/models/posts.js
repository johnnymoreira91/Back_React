var wallet = require('./wallet.json');

module.exports = {
    posts: [
        { id: generateID(), title: 'Primeiro post', description: 'Fazendo o primeiro post' },
    ],

    wallets: wallet,

    getAll() {
        return this.posts;
    },

    newPost(title, description) {
        this.posts.push({ id: generateID(), title, description });
    },

    deletePost(id){
        
    }

}


function generateID() {
    return Math.random().toString(36).substr(2, 9);
};