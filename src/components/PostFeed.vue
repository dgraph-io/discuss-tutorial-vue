<template>
    <div>
      <div class="flex mb-10">
        <sui-input
          icon="search"
          placeholder="Type any keywords..."
          class="mr-3"
          :value="searchText"
          @change="(e) => searchText = e.target.value"
        />
        <sui-dropdown
          placeholder="Categories"
          fluid
          search
          selection
          clearable
          class="mr-3 category-field"
          defaultValue={category}
          options={categoriesOptions}
          @change="(e, data) => category = data.value"
        />
        <sui-input
          placeholder="Enter space separated tags..."
          class="mr-3 tags-field"
          :value="tags"
          @change="(e) => tags = e.target.value"
        />
        <sui-button class="dgraph-btn mr-2" onClick={searchPosts}>
          Search
        </sui-button>
        <sui-button v-if="searchStatus" class="dgraph-btn" onClick={clearSearch}>
            Clear
        </sui-button>
      </div>
      <sui-table basic="very">
        <sui-table-header>
          <sui-table-row>
            <sui-table-headerCell>Posts</sui-table-headerCell>
            <sui-table-headerCell>Category</sui-table-headerCell>
            <sui-table-headerCell>Tags</sui-table-headerCell>
            <sui-table-headerCell>Responses</sui-table-headerCell>
          </sui-table-row>
        </sui-table-header>

        <sui-table-body>
            <sui-table-row 
                v-for="post in posts" 
                :key="post.id"
            >
                <sui-table-cell>
                <router-link
                    to="{
                        path: '/post/' + post?.id,
                    }"
                >
                    <sui-header as="h4" image>
                    <sui-image :src="getAvatarImage(post.author.avatarImg)" rounded size="mini" />
                    <sui-header-content>
                        {post?.title}
                        <sui-header-subheader>{post?.author.displayName}</sui-header-subheader>
                    </sui-header-content>
                    </sui-header>
                </router-link>
                </sui-table-cell>
                <sui-table-cell>
                <span class="ui red empty mini circular label"></span>{" "}
                {" " + post?.category.name}
                </sui-table-cell>
                <sui-table-cell>
                {tagsArray.map((tag) => {
                    if (tag !== "") {
                    return (
                        <sui-label as="a" basic color="grey" key={tag}>
                        {tag}
                        </sui-label>
                    );
                    }
                    return " "
                })}
                </sui-table-cell>
                <sui-table-cell>
                <p>
                    <i class="heart outline icon"></i> {likes} Like
                    {likes === 1 ? "" : "s"}
                </p>
                <p>
                    <i class="comment outline icon"></i> {post?.comments.length}{" "}
                    Replies
                </p>
                </sui-table-cell>
            </sui-table-row>
        </sui-table-body>
      </sui-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchText: "",
            tags: ""
        }
    },

    methods: {
        getAvatarImage(img) {
            return img ?? "/" + Math.floor(Math.random() * (9 - 1) + 1) + ".svg"
        }
    }
}
</script>

<style>

</style>