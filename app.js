new Vue({
    el: "#jogo",
    data: {
        comands: [],
        heroLife: 100,
        monsterLife: 100,
        maxAttackMoster: 10,
        maxAttackHero: 6,
        maxSpecialAttack: 15,
        battleHistory: []
    },
    methods: {
        attack () {
            
        },
        health () {
            var attack = this.calculationAttack(this.maxAttackHero)
            this.heroLife += attack
            this.battleHistory.push({ typeEvent: 'alert-success', text: `O Heroi se curou ${attack}` })
            this.mosterAttack()
        },
        giveup () {
            console.log('askdklasdklas')
            this.heroLife = 100
            this.monsterLife = 100
            this.battleHistory = []
        },
        calculationAttack (max) {
            return Math.floor(Math.random() * max + 1)
        },
        mosterAttack () {
            attack = this.calculationAttack(this.maxAttackMoster)
            this.heroLife -= attack
            this.battleHistory.push({typeEvent: 'alert-danger', text: `O monstro atacou e tirou ${attack} de vida do Heroi`})
        },
        heroAttack () {
            attack = this.calculationAttack(this.maxAttackHero)
            this.monsterLife -= attack
            this.battleHistory.push({typeEvent: 'alert-success', text: `O heroi atacou e tirou ${attack} do monstro`})
            this.mosterAttack()
        },
        heroAttackSpecial () {
            var attack = this.calculationAttack(this.maxSpecialAttack)
            this.monsterLife -= attack
            this.battleHistory.push({typeEvent: 'alert-success', text: `O heroi usuou seu Atack especial e tirou ${attack} do monstro`})
            this.mosterAttack()
        }
    },
    mounted () {
        
    },
    watch: {
        heroLife: (val) => {
            if (val > 100) {
                this.heroLife = 100
                return
            }

            if (val < 1){
                alert('Você Perdeu')
                this.giveup()
            }
        }
    }
})