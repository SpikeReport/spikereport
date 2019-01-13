<template>
    <div class="report">
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
            <p>Description of incident<br>
                <textarea cols=20 rows=20>
                </textarea>
            </p>

            <p>
                Submit<br>
                <input type="submit">
            </p>


        </form>
    </div>
</template>

<script type="text/javascript">

export default {

};
</script>

<style>
</style>