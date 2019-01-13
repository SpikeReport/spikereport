<template>
    <div class="container">
        <div class="row">
        <form id="report">
            <p>
                In which country did you get, or suspect you got, spiked?
                <br>
                <input type="text" v-model="country">
                {{country}}
            </p>
            <p>
                In which city did you get, or suspect you got, spiked?<br>
                <input type="text" v-model="city">
                {{city}}
            </p>
            <p>
                In which location did you get, or do you suspect, you got spiked?<br>
                <input type="text" v-model="location">
            </p>

            <p>On which day (approximately) did you, or do you suspect, you got spiked?<br>
            <input type="date" v-model="date">
                {{date}}
            </p>

            <p>What time do you estimate you got spiked?
            <input type="time" v-model="time">
                {{time}}
            </p>
            <br>
            <br>
            The following questions are optional. However, it can help researchers and law enforcement
            alike if you decide to answer them. All of this data will be handled anonymously.
            <br>
            <p>Age
                <input type="number" v-model="age">
                {{age}}
            </p>

            <p>Biological Gender
                <select>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </p>

            <p>Sexual Orientation
                <select>
                    <option value="heterosexual">Straight</option>
                    <option value="homosexual">Gay</option>
                    <option value="bisexual">Bisexual</option>
                    <option value="transgender">Trans</option>
                    <option value="other">Other</option>
                </select>
            </p>
            <br>
            
            <p>Effects noticed during or after the incident<br>
                <input type="checkbox" id="drowsy" name="drowsy">
                <label for="drowsy"> Extreme Drowsiness</label><br>
                <input type="checkbox" id="concentration" name="concentration">
                <label for="concentration"> Inability to concentrate</label><br>
                <input type="checkbox" id="breathing" name="breathing">
                <label for="breathing"> Difficulty breathing</label><br>
                <input type="checkbox" id="heartbeat_slow" name="heartbeat_slow">
                <label for="heartbeat_slow"> Decrease in heartrate</label><br>
                <input type="checkbox" id="hearbeat_fast" name="heartbeat_fast">
                <label for="heartbeat_fast"> Increase in heartrate </label><br>
                <input type="checkbox" id="disinhibition" name="disinhibition">
                <label for="disinhibition"> Loss of inhibitions </label><br>
                <input type="checkbox" id="drunkness_inc" name="drunkness_inc">
                <label for="drunkness_inc"> Sudden increase in drunkness</label><br>
                <input type="checkbox" id="drunkness_dec" name="drunkness_dec">
                <label for="druckness_dec"> Did not notice drunkness </label><br>
                <input type="checkbox" id="unconcious" name="unconcious">
                <label for="unconcious">Loss of conciousness</label><br>
                <input type="checkbox" id="vomiting" name="vomiting">
                <label for="vomiting">Vomiting</label><br>
                <input type="checkbox" id="emotion" name="emotion">
                <label for="emotion">Loss of emotion</label><br>
                <input type="checkbox" id="coordination" name="coordination">
                <label for="coordination">Loss of coordination</label><br>
                <input type="checkbox" id="euphoria" name="euphoria">
                <label for="euphoria">Euphoria</label><br>
                <input type="checkbox" id="grandiosity" name="grandiosity">
                <label for="grandiosity">Sense of grandiosity("On top of the world")</label><br>
                <input type="checkbox" id="amnesia" name="amnesia">
                <label for="amnesia">Loss of memory (Blackout/Amnesia)</label><br>
            </p>
            <p>Description of incident<br>
                <textarea cols=60 rows=20>
                </textarea>
            </p>

            <p>
                Submit<br>
                <input type="submit">
            </p>


        </form>
        </div>
    </div>
</template>

<script type="text/javascript">

export default {

};
</script>

<style>
</style>