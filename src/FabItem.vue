<template>
    <GridLayout class="fab-item-holder" :horizontalAlignment="rPosition" :columns="fabColumns" width="100%" isPassThroughParentEnabled="true">
        <MDButton
            :col="fabButtonCol"
            class="fab-item"
            :class="buttonClass || iconClass"
            :color="color"
            :rippleColor="rippleColor"
            :backgroundColor="backgroundColor"
            :text="icon"
            @tap="onButtonTap"
            :isUserInteractionEnabled="active"
        />
        <Label col="1" class="fab-item-title" :class="titleClass" :text="title" v-if="title" @tap="onButtonTap" :isUserInteractionEnabled="active"/>
    </GridLayout>
</template>

<script lang="ts" src="./FabItem.ts"/>
