<template>
    <footer>
        <div class="first-div">
            <div class="img-div">
                <img class="logo" src="../../images/logo-header.png" alt="logo-disney+" />
            </div>
        </div>
             <div >
                <ul class="list-div justify-content-center gap-4   list-unstyled d-flex m-0 mt-3 " style="font-size: 12px;">
                    <li><a>Informativa sulla privacy</a></li>
                    <li><a >Policy sui cookie</a></li>
                    <li><a >Normativa sulla privacy in UE e UK</a></li>
                    <li><a >Condizioni Generali di Abbonamento</a></li>
                    <li><a >Assistenza</a></li>
                    <li><a >Dispositivi supportati</a></li>
                    <li><a >Chi siamo</a></li>
                    <li><a >Pubblicità basata sugli interessi</a></li>
                    <li><a >Gestione preferenze dati personali</a></li>
                </ul>
            </div>
            <div class="diritti"   >
                © Disney. Tutti i diritti riservati.
            </div> 
    </footer>
</template>

<script>
    export default {
        name:"FooterComponent"
    }
</script>

<style lang="scss" scoped>
footer{
    margin-top:100px;
    background-color:#0e0b14;
    .first-div{
        padding-top: 19px;
        width: 94px;
        margin: 0px auto;
        .img-div{
            cursor: pointer;
            min-width: 62px;
            height: 38px;
            margin-right: 24px;
        }
        .list-div{
            padding: 120px;
            margin: 0px auto;
            flex-flow: wrap;
            
        }
        
    }
    .logo {
    
    height: 38px;
    width: 70px;
    }
    .container--hw-full {
    height: 100%;
    width: 100%;
    }
    .diritti{
            display:flex;
            justify-content:center;
            color: #cacaca;
            font-size:12px;
            padding-top: 1.5rem;
            margin:0px auto;
            padding-bottom: 1.5rem;
            
        }
}
</style>