<template>
    <div class="navigation">
        <!-- Links to admin-specific components -->
        <router-link :to="{ name: 'find-student' }">Find Student</router-link>
        <router-link :to="{ name: 'invite-students' }">Invite Students</router-link>
        <router-link :to="{ name: 'find-sections' }">Find Sections</router-link>
        <router-link :to="{ name: 'find-teams' }">Find Teams</router-link>
        <router-link :to="{ name: 'team-management' }">Team Management</router-link>
        <router-link :to="{ name: 'create-section' }">Create Section</router-link>
        <router-link :to="{ name: 'create-team' }">Create Team</router-link>
        <router-link :to="{ name: 'edit-team' }">Edit Team</router-link>
    </div>
</template>

<script>
// No script needed if you're just linking to existing components
</script>

<style lang="scss" scoped>
.navigation {
    a {
        background-color: #fff;
        text-decoration: none;
        padding: 5px 10px;
        color: #a9c7ee;
        font-weight: bold;

        &.router-link-exact-active {
            background-color: #8968cd;
        }
    }
}
</style>
