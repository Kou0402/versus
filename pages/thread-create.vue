<template>
  <main>
    <div class="columns is-mobile">
      <div class="column is-10 is-offset-1 has-text-centered">
        <h2 class="has-text-centered">二つのテーマを決めよう！</h2>
        <div class="field">
          <div class="control">
            <input v-model="$v.theme1.$model" class="input" type="text" />
          </div>
        </div>
        <img class="field vs" src="~/assets/images/vs.svg" />
        <div class="field">
          <div class="control">
            <input v-model="$v.theme2.$model" class="input" type="text" />
          </div>
        </div>
        <h2 class="has-text-centered">
          あなたの立ち位置から意見を書き込もう！
        </h2>
        <div class="toggle-buttons">
          <ToggleRadioButton
            v-model="position"
            :label="theme1"
            value="theme1"
          ></ToggleRadioButton>
          <ToggleRadioButton
            v-model="position"
            :label="theme2"
            value="theme2"
          ></ToggleRadioButton>
        </div>
        <textarea v-model="$v.content.$model" class="textarea"></textarea>
        <button
          class="button"
          :disabled="$v.$invalid"
          @click="onClickCreateThreadButton"
        >
          スレッドを作成する
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import ToggleRadioButton from '~/components/molecules/toggle-radio-button.vue'

export default {
  components: {
    ToggleRadioButton
  },
  data() {
    return {
      theme1: '',
      theme2: '',
      position: 'theme1',
      content: ''
    }
  },
  validations: {
    theme1: {
      required
    },
    theme2: {
      required
    },
    content: {
      required
    }
  },
  methods: {
    onClickCreateThreadButton() {
      this.publishThread()
      const threads = this.$store.getters['thread/threads']
      const createdThread = threads.pop()
      this.publishPost(createdThread.threadId)
    },

    changeValue(newValue) {
      this.position = newValue
    },

    publishThread() {
      const thread = {
        createdUserName: undefined,
        createdDate: this.$dayjs().format('YYYY-MM-DD'),
        createdTime: this.$dayjs().format('HH:mm:ss'),
        theme1: this.theme1,
        theme2: this.theme2
      }
      this.$store.dispatch('thread/publishThread', thread)
    },

    publishPost(threadId) {
      const post = {
        threadId,
        createdUserName: undefined,
        createdDate: this.$dayjs().format('YYYY-MM-DD'),
        createdTime: this.$dayjs().format('HH:mm:ss'),
        position: this.position,
        content: this.content
      }
      this.$store.dispatch('posts/publishPost', post)
    }
  }
}
</script>

<style lang="scss" scoped>
.vs {
  width: 30px;
  height: 30px;
  margin-top: 5px;
}
</style>
