<template>
  <div class="card mx-auto rounded-4" id="kartica" style="width: 90%">
    <div class="card-body">
      <div class="row" style="font-size: 13px">
        <div class="col-4 align-self-center">
          {{ dailyTask.naziv }}
        </div>
        <div class="col-3 align-self-center" style="color: black">
          {{ dailyTask.vrijeme }}
        </div>
        <div class="col align-self-center" style="color: #ff344c">
          <input
            class="form-check-input"
            type="checkbox"
            name="option-1"
            id="check-1"
            :checked="checked"
            @change="updateFirestore"
          />
        </div>
        <div class="col align-self-center">
          <button @click="UrediZadatak" class="gumb">Uredi</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";
import store from "@/store";

export default {
  props: ["dailyTask"],
  data() {
    return {
      checked: false, // zelimo da checked ima boolean vrijednost
    };
  },
  methods: {
    UrediZadatak() {
      this.$router.push({
        name: "EditTask",
        params: { id: this.dailyTask.id },
      });
    },
    async updateFirestore() {
      try {
        this.checked = event.target.checked;
        await db
          .collection("Tasks")
          .doc(store.currentUser)
          .collection("MyTasks")
          .doc(this.dailyTask.id)
          .update({ checked: this.checked });
        console.log("Firestore document updated successfully.");
      } catch (error) {
        console.error("Error updating Firestore document:", error);
      }
    },
    async dohvatiStanje() {
      try {
        const doc = await db
          .collection("Tasks")
          .doc(store.currentUser)
          .collection("MyTasks")
          .doc(this.dailyTask.id)
          .get();
        if (doc.exists) {
          this.checked = doc.data().checked;
        }
      } catch (error) {
        console.error("Error fetching state:", error);
      }
    },
  },
  mounted() {
    this.dohvatiStanje();
  },
};
</script>

<style>
#kartica {
  font-weight: 600;
  margin-top: 20px;
}
.form-check-input:checked {
  background-color: #ff344c;
  border-color: #ff344c;
  border-radius: 50%;
}
.form-check-input {
  border-color: #ff344c;
  border-width: 2px;
}
#check-1 {
  border-radius: 50%;
}
#link {
  color: #ff344c;
  text-decoration: none;
}
.gumb {
  background: none;
  border: none;
}
</style>
