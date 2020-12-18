<template>
  <ApolloQuery 
    :query="require('@/graphql/queries/post.gql')"
    :variables="{ id: $route.params.id }"
  >
    <template v-slot="{ result: { loading, error, data}}">
      <sui-loader v-if="loading" active />

      <sui-container v-else-if="error" text class="mt-24">
        <h1 is="sui-header">Ouch! That page didn't load</h1>
        <p>Here's why : {{error.message}}</p>
      </sui-container>

      <sui-container v-else-if="!data || !data.getPost" text class="mt-24">
        <h1 is="sui-header">This is not a post</h1>
        <p>You've navigated to a post that doesn't exist.</p>
        <p>That most likely means that the id {{$route.params.id}} isn't the id of post.</p>
      </sui-container>

      <div v-else-if="data" class="layout-margin">
        <div>
          <h1 is="sui-header">{{data.getPost.title}} </h1>
          <span class="ui red empty mini circular label"></span>
          {{" " + data.getPost.category.name + "  "}}

          <template v-if="data.getPost.tags">
            <sui-label
              v-for="tag in data.getPost.tags.trim().split(/\s+/)"
              :key="tag"
              as="a" basic color="grey"
            >
              {{tag}}
            </sui-label>
          </template>
        </div>

        <h4 is="sui-header">
          <sui-image
            :src="getAvatarUrl(data.getPost.author.avatarImg)"
            rounded
            size="mini"
          />
          <div class="content">
            {{data.getPost.author.displayName}}
            <sui-header-subheader>{{getDateStr(data.getPost)}}</sui-header-subheader>
          </div>
        </h4>
        
        <p 
          v-for="(para,index) in data.getPost.text.split('\n')"
          :key="index"
        >
          {{para}}
        </p>

        <div class="mt-3">
          <sui-comment-group
            v-for="comment in data.getPost.comments" 
            :key="comment.id"
          >
            <sui-comment>
              <sui-comment-avatar
                :src="getAvatarUrl(comment.author.avatarImg)"
                size="mini"
              />
              <sui-comment-content>
                <sui-comment-author as="a">
                  {{comment.author.displayName}}
                </sui-comment-author>
                <sui-comment-text>{{comment.text}}</sui-comment-text>
              </sui-comment-content>
            </sui-comment>
          </sui-comment-group>
        </div>
      </div>
    </template>
  </ApolloQuery>
</template>


<script>
import { DateTime } from "luxon"

export default {
  methods: {
    getAvatarUrl: (img) => img ?? "/" + Math.floor(Math.random() * (9 - 1) + 1) + ".svg",

    getDateStr(post) {
      let dateStr = "at some unknown time"

      if (post.datePublished) {
        dateStr = DateTime.fromISO(post.datePublished).toRelative() ?? dateStr
      }

      return dateStr;
    }
  }
}
</script>