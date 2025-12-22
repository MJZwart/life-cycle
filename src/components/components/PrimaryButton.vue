<template>
    <button 
        py-3 px-5 
        rounded-md 
        bg-gentle-light 
        bg-opacity-10 
        text-gentle-light 
        border-gentle-light 
        border-opacity-50 
        border-1 
        border-solid
        cursor-pointer
        hover:border-opacity-100
        hover:bg-opacity-20
        transition-all
        transition-ease-in-out
        transition-duration-150
        >
        <slot />
    </button>
</template>