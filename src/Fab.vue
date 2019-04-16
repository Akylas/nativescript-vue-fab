<template>
    <GridLayout left="0" top="0" height="100%" width="100%" rows="*,auto,8" columns="*,auto,8">
        <GridLayout colSpan="3" rowSpan="3" class="fab-backdrop" :class="classBackdrop"  @tap="onBackdropTap"/>
        <StackLayout ref="fabItemContainer" row="1" col="1">
            <StackLayout>
                <slot />
            </StackLayout>
            <StackLayout horizontalAlignment="right" orientation="horizontal" marginRight="4">
                <MDCardView ref="titleLabel" class='fab-item-title-holder' :class="computedTitleClass" :visibility="title?'visible':'collapsed'" @tap="onButtonTap">
                    <Label class="fab-item-title" :text="title" />
                </MDCardView>
                <MDCardView class="fab-button" @tap="onButtonTap" :backgroundColor='color'>
                    <GridLayout rows="*" columns="*" width="100%" height="100%" isUserInteractionEnabled="false" class="fab-icon-holder">
                        <Label width="100%" height="100%" class="fab-icon fab-icon-off" :class="iconOffClass" :color="iconColor" :text="icon"/>
                        <Label width="100%" height="100%" class="fab-icon fab-icon-on" :class="iconOnClass" :color="iconColor" :text="iconOn || icon"  />
                    </GridLayout>
                </MDCardView>
            </StackLayout>

        </StackLayout>
    </GridLayout>
</template>


<script src="./Fab.ts"/>
