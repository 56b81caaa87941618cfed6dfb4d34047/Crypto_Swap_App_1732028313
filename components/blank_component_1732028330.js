<!--
INSTRUCTION: Summary: The blank component contains the following two parts:
INSTRUCTION: - To the left: There is an empty div with text on top and bottom.
INSTRUCTION: - To the right: There is an empty div.
INSTRUCTION:
INSTRUCTION: If the user asks you to insert components left and right of each other, first wrap them into `<div class="grid"> </div>` and then use the following syntax:
INSTRUCTION: <div class="grid">
INSTRUCTION:     <!-- these components appear to the left side -->
INSTRUCTION:     <div id="left-side-container" class="flex"> Left side part here </div>
INSTRUCTION:
INSTRUCTION:     <!-- these components appear to the right side -->
INSTRUCTION:     <div id="right-side-container" class="flex"> Right side part here</div>
INSTRUCTION: </div>
-->
<template>
    <div>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <section id="blank-section" class="bg-white dark:bg-gray-900 flex-1">
            <div id="blank-container" class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                <div class="flex-1">
                    <form @submit.prevent="handleSwap" class="bg-white dark:bg-gray-800 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                            <label class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" for="fromAmount">
                                From Amount
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="fromAmount" type="number" v-model="fromAmount" placeholder="Enter amount">
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" for="fromCurrency">
                                From Currency
                            </label>
                            <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="fromCurrency" v-model="fromCurrency">
                                <option value="BTC">Bitcoin (BTC)</option>
                                <option value="ETH">Ethereum (ETH)</option>
                                <option value="USDT">Tether (USDT)</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" for="toCurrency">
                                To Currency
                            </label>
                            <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="toCurrency" v-model="toCurrency">
                                <option value="BTC">Bitcoin (BTC)</option>
                                <option value="ETH">Ethereum (ETH)</option>
                                <option value="USDT">Tether (USDT)</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" for="toAmount">
                                Estimated Receive Amount
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="toAmount" type="number" :value="estimatedAmount" readonly>
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Swap
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>  
    </div>
</template>

<script>
export default {
    name: "BlankComponent",
    data() {
        return {
            fromAmount: 0,
            fromCurrency: 'BTC',
            toCurrency: 'ETH',
            estimatedAmount: 0,
        };
    },
    methods: {
        // Swap method
        handleSwap() {
            console.log('Swap initiated');
            // Add your swap logic here
        },
        // End of Swap method

        // Estimate amount method
        estimateAmount() {
            // Add your estimation logic here
            this.estimatedAmount = this.fromAmount * 2; // Placeholder calculation
        }
        // End of Estimate amount method
    },
    watch: {
        fromAmount() {
            this.estimateAmount();
        },
        fromCurrency() {
            this.estimateAmount();
        },
        toCurrency() {
            this.estimateAmount();
        }
    }
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
