<template>
    <GridLayout class="fab-item-holder" :horizontalAlignment="position" :columns="fabColumns" width="100%" isPassThroughParentEnabled="true">
        <MDButton
            :col="fabButtonCol"
            class="fab-item"
            :class="buttonClass || iconClass"
            :color="color"
            :rippleColor="rippleColor"
            :backgroundColor="backgroundColor"
            :text="icon"
            @tap="onButtonTap"
        />
        <Label col="1" class="fab-item-title" :class="titleClass" :text="title" v-if="title" @tap="onButtonTap" />
    </GridLayout>
</template>

<script lang="ts" src="./FabItem.ts"/>
