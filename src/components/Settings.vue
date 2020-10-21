<template>
  <sui-modal
    v-model="updateSettings"
  >
    <sui-modal-header>Update Settings</sui-modal-header>
    <sui-modal-content>
    <sui-modal-description>
        <sui-form>
            <sui-form-field>
                <label>Display Name</label>
                <input
                placeholder="Update display name..."
                value={name}
                @change="(e) => setName(e.target.value)"
            />
            </sui-form-field>
            <sui-form-field>
                <label>Avatar</label>
                <sui-dropdown
                    placeholder="You must select a cool avatar..."
                    fluid
                    selection
                    options={avatarsOptions}
                    defaultValue={avatarImg}
                    @change="(e, data) => setAvatarImg(data.value + '')"
                />
            </sui-form-field>
            <sui-form-field v-if="adminStatus && tokenValue">
                <label>Token</label>
                <sui-textarea readOnly value={tokenValue} />
            </sui-form-field>
        </sui-form>
    </sui-modal-description>
    </sui-modal-content>
    <sui-modal-actions>
        <sui-button color="black" @click="() => setUpdateSettings(false)">
            Cancel
        </sui-button>
        <sui-button
            content="Submit"
            labelPosition="right"
            icon="checkmark"
            onClick={submitSettings}
            positive
        />
    </sui-modal-actions>
  </sui-modal>
</template>

<script>
export default {
    data() {
        return {
            adminStatus: false,
            tokenValue: null
        }
    }
}
</script>

<style>

</style>