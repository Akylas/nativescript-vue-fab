<template>
    <GridLayout left="0" top="0" height="100%" width="100%" rows="auto,*,auto,auto" columns="auto,*,auto" isPassThroughParentEnabled="true">
        <AbsoluteLayout colSpan="3" rowSpan="4" class="fab-backdrop" :class="classBackdrop" @tap="onBackdropTap" :isUserInteractionEnabled="active" />
        <StackLayout class="fab-items-holder" :horizontalAlignment="position" row="2" colSpan="3" isPassThroughParentEnabled="true">
            <slot />
        </StackLayout>
        <GridLayout :columns="isRight ? '*,auto,auto' : 'auto,auto,*'" padding="8" width="100%" :horizontalAlignment="position" row="3" colSpan="3" isPassThroughParentEnabled="true" >
            <MDCardView col="1" ref="titleLabel" class='fab-title-holder' :class="computedTitleClass" :visibility="title?'visible':'collapsed'" :isUserInteractionEnabled="active" @tap="onButtonTap">
                <StackLayout orientation="horizontal" height="100%">
                    <Label class="fab-item-title" :text="title" />
                </StackLayout>
            </MDCardView>
            <GridLayout :col="isRight? 2 : 0">
                <MDButton class="fab-button" @tap="onButtonTap" :color="color" :backgroundColor="backgroundColor"/>
                <label class="fab-icon fab-icon-off" :class="iconOffClass" :color="color" :text="icon" isUserInteractionEnabled="false" style="z-index:20;"/>
                <Label  class="fab-icon fab-icon-on" :class="iconOnClass" :color="color" :text="iconOn || icon" isUserInteractionEnabled="false" style="z-index:20;"/>
            </GridLayout>
        </GridLayout>

    </GridLayout>
</template>


<script src="./Fab.ts"/>
