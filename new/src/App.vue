<template>
  <h1>Contats page</h1>
  <div class="app-buttons">
    <my-button @click="showDialog">Create contact</my-button>
    <my-input v-model="searchQuery" />
    <my-select v-model="selectedSort" :options="sortOptions" />
  </div>

  <my-dialog v-model:show="dialogVisible"
    ><contactForm @create="createContact"
  /></my-dialog>

  <contactList :contacts="searchedPosts" @remove="removePost" />
</template>

<script>
import contactForm from "./components/contactForm.vue";
import contactList from "./components/contactList.vue";
import axios from "axios";

export default {
  components: { contactForm, contactList },

  data() {
    return {
      contacts: [],
      dialogVisible: false,
      searchQuery: "",
      selectedSort: "",
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержимому" },
      ],
    };
  },
  methods: {
    createContact(post) {
      this.contacts.push(post);
      this.dialogVisible = false;
    },
    removePost(contact) {
      this.contacts = this.contacts.filter((c) => c.id !== contact.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchContacts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          { params: { _page: this.page, _limit: this._limit } }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.contacts = response.data;
      } catch (e) {
        alert(e);
      }
    },
  },
  mounted() {
    console.log(this.contacts);
    this.fetchContacts();
  },
  computed: {
    sortedPosts() {
      return [...this.contacts].sort((a, b) => {
        return a[this.selectedSort]?.localeCompare(b[this.selectedSort]);
      });
    },
    searchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.includes(this.searchQuery)
      );
    },
  },
  watch: {},
};
</script>
<style>
h1,
p {
  margin: 0;
}

.app-buttons {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
</style>
