<template>
    <GridLayout class="fab-item-holder" :horizontalAlignment="position" :columns="isRight ? '*,auto,auto' : 'auto,auto,*'" width="100%" isPassThroughParentEnabled="true" :debug="debug">
        <MDCardView col="1" ref="titleLabel" class="fab-item-title-holder" :class="computedTitleClass" :visibility="title?'visible':'collapsed'" :isUserInteractionEnabled="visible" @tap="onButtonTap" :debug="debug">
            <StackLayout orientation="horizontal" height="100%">
                <Label class="fab-item-title" :text="title" />
            </StackLayout>
        </MDCardView>
        <MDButton :col="isRight ? 2 : 0" ref="button" class="fab-item" :class="computedButttonClass" :color="color" :backgroundColor="backgroundColor" :text="icon" @tap="onButtonTap" :isUserInteractionEnabled="visible" :debug="debug" />
    </GridLayout>
</template>

<script lang="ts" src="./FabItem.ts"/>