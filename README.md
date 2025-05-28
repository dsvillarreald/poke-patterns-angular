

# 🧠 Pokémon Attack Patterns – Angular 17 (EN)

This project is an educational demo that applies three classic design patterns in a Pokémon-themed context: **Strategy**, **Decorator**, and **Template Method**, using Angular 17 and Signals.

### 🎯 Goal:

Show how to structure a `Screaming architecture`  extensible solution to manage Pokémon attacks using different object-oriented design approaches.

### 📁 Project Structure

```bash
src/pokemon-pattern-app/
├── attacks-patterns/
│   ├── attack-strategy/         # Strategy Pattern
│   ├── attack-decorator/        # Decorator Pattern and its Factory
│   └── attack-template-method/  # Template Method Pattern
│
├── combat-interface
│   ├── battle-demo              # Visual component with the execution of the battle
│   ├── layout                   # Main Visual component with routing
│   └── interface-components     # Complementary interface components
│        └──pattern-selector     # Pattern selection component implementing signals
│
├── configure-app/               # General configuration
├── pokemon/
│   └── pokemon.model.ts         # Exporting interfaces, constants, and enums
└── service-app/     
    ├── battle.service.ts/       # Result Service for battles
    └── patterns.signal.ts/      # Sinals definition for patterns
```

---

### 💡 Applied Design Patterns

#### 🔥 1. Strategy Pattern

**Goal:** Allow dynamic selection of attack logic based on Pokémon type.

##### Structure:

> * ***AttackStrategy*** (interfaz): defines method `attack(): void`
> * **Concrete strategies:**
> > * FireStrategy  
> > * WaterStrategy  
> > * GrassStrategy  
> * ***AttackContext*** exposes a method `execute()` that delegates the attack to the current strategy.

##### Flow

1. The component sets the context with the desired strategy:  
   `buildAttackContext(attacker: IPokemon, opponent: IPokemon): AttackContext`

2. Executes the attack:  
   `AttackContext => context.execute();`

3. The strategy emits the result to an observable to be displayed.

---

#### 🌿 2. Decorator Pattern

**Goal:** Add additional behaviors to the basic attack (such as fire, water, and grass attacks) without modifying the base classes.

##### Estructura:

> * **Attack** (abstract class): defines method `execute()`.
> * ***ConcreteAttack***: base attack implementation with simple behavior.
> * ***Concrete Decorators:***
> > 1. FireAttackDecorator  
> > 2. WaterAttackDecorator  
> > 3. GrassAttackDecorator

##### Flow and Factory:

* ***AttackFactory***: receive an `attacker` and build the decorated attack chain:

```ts
const base = new ConcreteAttack(attacker);
// Depending on the type of attacker:
return new FireAttackDecorator(base, attacker);
```

* The component calls the factory to receive the decorated attack chain by Pokémon type and executes it:

```ts
const decorated = AttackFactory.create(attacker!);
const result = decorated.execute();
this.result.set(result.message);
```

* After execution, the result is sent to the `sendResult()` method to be emitted to an observable and displayed.

---

#### 🌊 3. Template Method Pattern

**Goal:** Define a general structure for an attack and delegate specific steps to subclasses.

##### Structure:

> * Abstract class `BaseTemplateAttack`:
> > * Defines the `execute()` method with the fixed structure.
> > * Calls methods like `getMovement()` and `getEffectiveness()` that are overridden.

```ts
execute(): AttackResult {
    return {
        movement: this.getMovement(),
        effectiveness: this.getEffectiveness()
    };
}
```

> * Subclasses:
> > * FireTemplateAttack  
> > * WaterTemplateAttack  
> > * GrassTemplateAttack

##### Flow:

1. The component creates a specific instance (for example `new FireTemplateAttack(attacker, opponent)`).

2. Call `attack.execute()` and run generic logic with custom steps.

---

### ⚔️ Comparison between Patterns

| Pattern                  | Purpose                                         | Extensibility         | Implementation in the project             |
|:----:|:--------------------------------------------------|:----:|:-------------------------------------------|
| 🔥 **Strategy**         | Select the complete attack logic        | ✅ **Alta**                | Injected via context (service)         |
| 🌿 **Decorator**        | Add behavior without altering the base class | ✅ **Alta (composición)**  | Chaining with `AttackFactory`        |
| 🌊 **Template Method**  | Define skeleton and delegate specific steps    | ✳️ **Moderada**            | Subclasses that implement methods         |

&nbsp;
---
# 🧠 Pokémon Attack Patterns – Angular 17 (ES)

Este proyecto es una demostración educativa que aplica tres patrones de diseño clásicos en un contexto temático de Pokémon: **Strategy**, **Decorator** y **Template Method**, utilizando Angular 17 y Signals.

### 🎯 Objetivo:

Mostrar cómo estructurar una solución con `Screaming Architecture`  y extensible para gestionar ataques de Pokémon mediante distintos enfoques de diseño orientado a objetos.

### 📁 Estructura del Proyecto

```bash
src/pokemon-pattern-app/
├── attacks-patterns/
│   ├── attack-strategy/         # Patrón Strategy
│   ├── attack-decorator/        # Patrón Decorator y Factory
│   └── attack-template-method/  # Patrón Template Method
│
├── combat-interface
│   ├── battle-demo              # Componente visual para la ejecución de batalla
│   ├── layout                   # Componente visual principal, con el enrutamiento
│   └── interface-components     # Componentes complementarios de la interface.
│        └──pattern-selector     # Componente para la selección de patrón, implementando Signals
│
├── configure-app/               # Configuración general
├── pokemon/
│   └── pokemon.model.ts         # Exportanción de interfaces, constantes, y enums
└── service-app/     
    ├── battle.service.ts/       # Servicio de Resultado para batallas
    └── patterns.signal.ts/      # Definición de Signals para Patrones
```

---

### 💡 Patrones de Diseño Aplicados

#### 🔥 1. Patrón Strategy

**Objetivo:** Permitir seleccionar dinámicamente la lógica de ataque según el tipo de Pokémon.

##### Estructura:

> * ***AttackStrategy*** (interfaz): define el método `attack(): void`
> * **Estrategias concretas:**
> > * FireStrategy  
> > * WaterStrategy  
> > * GrassStrategy  
> * ***AttackContext*** expone un método `execute()` que delega el ataque a la estrategia actual.

##### Flujo

1. El componente establece el contexto con la estrategia deseada:  
   `buildAttackContext(attacker: IPokemon, opponent: IPokemon): AttackContext`

2. Ejecuta el ataque:  
   `AttackContext => context.execute();`

3. La estrategia emite el resultado a un observable para ser mostrado.

---

#### 🌿 2. Patrón Decorator

**Objetivo:** Agregar comportamientos adicionales al ataque básico (como ataques de fuego, agua y planta) sin modificar las clases base.

##### Estructura:

> * **Attack** (clase abstracta): define el método `execute()`.
> * ***ConcreteAttack***: implementación base de ataque con comportamiento simple.
> * ***Decoradores concretos:***
> > 1. FireAttackDecorator  
> > 2. WaterAttackDecorator  
> > 3. GrassAttackDecorator

##### Flujo y Factory:

* ***AttackFactory***: recibe un `attacker` y construye la cadena de ataque decorado:

```ts
const base = new ConcreteAttack(attacker);
// Dependiendo del tipo del attacker:
return new FireAttackDecorator(base, attacker);
```

* El componente llama a la factoría para recibir la cadena decorada del ataque por tipo de Pokémon y la ejecuta:

```ts
const decorated = AttackFactory.create(attacker!);
const result = decorated.execute();
this.result.set(result.message);
```

* Después de la ejecución, el resultado se envía al método `sendResult()` para que sea emitido a un observable y mostrado.

---

#### 🌊 3. Patrón Template Method

**Objetivo:** Definir una estructura general para un ataque y delegar los pasos específicos a subclases.

##### Estructura:

> * Clase abstracta `BaseTemplateAttack`:
> > * Define el método `execute()` con la estructura fija.
> > * Llama a métodos como `getMovement()` y `getEffectiveness()` que son sobrescritos.

```ts
execute(): AttackResult {
    return {
        movement: this.getMovement(),
        effectiveness: this.getEffectiveness()
    };
}
```

> * Subclases:
> > * FireTemplateAttack  
> > * WaterTemplateAttack  
> > * GrassTemplateAttack

##### Flujo:

1. El componente crea una instancia específica (por ejemplo `new FireTemplateAttack(attacker, opponent)`).

2. Llama a `attack.execute()` y se ejecuta la lógica genérica con pasos personalizados.

---

### ⚔️ Comparación entre Patrones

| Patrón                  | Propósito                                         | Extensibilidad         | Implementación en el proyecto             |
|:-----------------------|:--------------------------------------------------|:----:|:-------------------------------------------|
| 🔥 **Strategy**         | Seleccionar la lógica completa del ataque        | ✅ Alta                | Inyectado vía contexto (servicio)         |
| 🌿 **Decorator**        | Agregar comportamiento sin alterar la clase base | ✅ Alta (composición)  | Encadenamiento con `AttackFactory`        |
| 🌊 **Template Method**  | Definir esqueleto y delegar pasos específicos    | ✳️ Moderada            | Subclases que implementan métodos         |