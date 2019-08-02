<template>
    <GridLayout class="fab-item-holder" :horizontalAlignment="position" :columns="isRight ? '*,auto,auto' : 'auto,auto,*'" width="100%" isPassThroughParentEnabled="true" :debug="debug">
        <Label orientation="horizontal" height="100%" col="1" ref="titleLabel" class="fab-item-title-holder fab-item-title" :class="computedTitleClass" :visibility="title?'visible':'collapsed'" :isUserInteractionEnabled="visible" @tap="onButtonTap" :debug="debug" />
            <!-- <Label class="fab-item-title" :text="title" /> -->
        <MDButton :col="isRight ? 2 : 0" ref="button" class="fab-item" :class="computedButttonClass" :color="color" :rippleColor="rippleColor" :backgroundColor="backgroundColor" :text="icon" @tap="onButtonTap" :isUserInteractionEnabled="visible" :debug="debug" />
    </GridLayout>
</template>

<script lang="ts" src="./FabItem.ts"/>