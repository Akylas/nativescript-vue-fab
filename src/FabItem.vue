<template>
    <StackLayout horizontalAlignment="right" orientation="horizontal" marginRight="4">
        <MDCardView ref="titleLabel" class="fab-item-title-holder" :class="computedTitleClass" :visibility="title?'visible':'collapsed'" @tap="onButtonTap">
            <Label class="fab-item-title" :text="title" />
        </MDCardView>
        <MDButton ref="button" class="fab-item" :class="computedButttonClass" :backgroundColor="color" :text="icon" @tap="onButtonTap"/>
    </StackLayout>
</template>

<script lang="ts" src="./FabItem.ts"/>
