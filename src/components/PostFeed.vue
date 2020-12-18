<template>
  <ApolloQuery :query="require('@/graphql/queries/posts.gql')">
    <template v-slot="{ result: { loading, error, data}}">
      <sui-loader v-if="loading" active />

      <sui-container v-else-if="error" text class="mt-24">
        <h1 is="sui-header">>Ouch! That page didn't load</h1>
        <p>Here's why : {{error.message}}</p>
      </sui-container>

      <sui-table v-else basic="very">
        <sui-table-header>
          <sui-table-row>
            <sui-table-header-cell>Posts</sui-table-header-cell>
            <sui-table-header-cell>Category</sui-table-header-cell>
            <sui-table-header-cell>Tags</sui-table-header-cell>
            <sui-table-header-cell>Responses</sui-table-header-cell>
          </sui-table-row>
        </sui-table-header>

        <sui-table-body v-if="data">
          <sui-table-row 
            v-for="post in data.queryPost"
            :key="post.id"
          >
            <sui-table-cell>
              <router-link
                :to="{ path: '/post/' + post.id }"
              >
                <h4 is="sui-header" image>
                  <sui-image :src="getAvatarUrl(post.author.avatarImg)" rounded size="mini" />
                  <sui-header-content>
                    {{post.title}}
                    <sui-header-subheader>{{post.author.displayName}}</sui-header-subheader>
                  </sui-header-content>
                </h4>
              </router-link>
            </sui-table-cell>
            <sui-table-cell>
              <span class="ui red empty mini circular label"></span>{{" "}}
              {{" " + post.category.name}}
            </sui-table-cell>
            <sui-table-cell>
              <template v-if="post.tags">
                <sui-label 
                  v-for="tag in post.tags.trim().split(/\s+/).filter(t => t)"
                  :key="tag"
                >
                  {{tag}}
                </sui-label>
              </template>
            </sui-table-cell>
            <sui-table-cell>
              <p 
                v-for="likes in [Math.floor(Math.random() * 10)]" 
                :key="likes"
              >
                <i class="heart outline icon"></i> 
                {{ likes }} Like{{likes === 1 ? "" : "s"}}
              </p>
              <p
                v-for="replies in [post.commentsAggregate.count]"
                :key="replies"
              >
                {{" "}}
                <i class="comment outline icon"></i> {{replies}}{{" "}}
                {{replies === 1 ? "Reply" : "Replies"}}
              </p>
            </sui-table-cell>
          </sui-table-row>
        </sui-table-body>

      </sui-table>
    </template>
  </ApolloQuery>
</template>

<script>
export default {
  methods: {
    getAvatarUrl: (img) => img ?? "/" + Math.floor(Math.random() * (9 - 1) + 1) + ".svg"
  }
}
</script>