<template>
    <GridLayout class="fab-item-holder" :horizontalAlignment="position" :columns="isRight ? '*,auto,auto' : 'auto,auto,*'" width="100%" isPassThroughParentEnabled="true" :debug="debug">
        <MDButton :col="isRight ? 2 : 0" ref="button" class="fab-item" :class="computedButttonClass" :color="color" :rippleColor="rippleColor" :backgroundColor="backgroundColor" :text="icon" @tap="onButtonTap" :isUserInteractionEnabled="visible" :debug="debug" />
        <Label  col="1" class="fab-item-title" :class="computedTitleClass" :text="title" v-if="title" :isUserInteractionEnabled="visible" @tap="onButtonTap" :debug="debug" />
    </GridLayout>
</template>

<script lang="ts" src="./FabItem.ts"/>